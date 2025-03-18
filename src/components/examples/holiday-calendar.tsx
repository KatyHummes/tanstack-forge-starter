import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ChevronRightIcon, MagnifyingGlassIcon, GearIcon } from "@radix-ui/react-icons"
import { format, parseISO, differenceInDays } from "date-fns"
import { useQuery } from "@tanstack/react-query"
import { holidayService, type Holiday, type ApiResponse, NoApiKeyError } from "@/api/holidayApi"

type ApiStatus = ApiResponse['requests']

const COUNTRIES = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Canada", code: "CA" },
  { name: "Australia", code: "AU" },
  { name: "Singapore", code: "SG" },
]

const STORAGE_KEY = 'holiday-api-key'

const HolidayCard: React.FC<{ holiday: Holiday }> = ({ holiday }) => (
  <div key={holiday.uuid} className="p-3 rounded bg-muted/50">
    <p className="font-medium">{holiday.name}</p>
    <p className="text-sm text-muted-foreground">
      {format(parseISO(holiday.date), 'MMMM d, yyyy')}
    </p>
    <p className="text-sm text-primary font-medium">
      {getDaysUntilHoliday(holiday.date)}
    </p>
    <p className="text-xs text-muted-foreground">
      {holiday.public ? 'Public Holiday' : 'Observance'}
    </p>
    {holiday.observed !== holiday.date && (
      <p className="text-xs text-muted-foreground">
        Observed: {format(parseISO(holiday.observed), 'MMMM d, yyyy')}
      </p>
    )}
  </div>
)

const getDaysUntilHoliday = (holidayDate: string) => {
  const days = differenceInDays(parseISO(holidayDate), new Date())
  if (days === 0) return 'Today'
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

export function HolidayCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
  const [selectedCountry, setSelectedCountry] = React.useState("US")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [apiStatus, setApiStatus] = React.useState<ApiStatus | null>(null)
  const [apiKey, setApiKey] = React.useState(() => localStorage.getItem(STORAGE_KEY) || "")
  const [isEditingKey, setIsEditingKey] = React.useState(false)

  // Save API key to localStorage when it changes
  React.useEffect(() => {
    if (apiKey) {
      localStorage.setItem(STORAGE_KEY, apiKey)
    }
  }, [apiKey])

  const isApiKeyMissing = React.useMemo(() => {
    return !apiKey && !import.meta.env.VITE_HOLIDAY_API_KEY
  }, [apiKey])

  // Query for selected date holidays
  const { data: holidaysData, isLoading: isHolidaysLoading, error: holidaysError } = useQuery<ApiResponse, Error>({
    queryKey: ['holidays', selectedCountry, selectedDate],
    queryFn: () => holidayService.getHolidays({
      country: selectedCountry,
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth() + 1,
      day: selectedDate.getDate(),
    })
  })

  // Query for upcoming holidays
  const { data: upcomingData, isLoading: isUpcomingLoading, error: upcomingError } = useQuery<ApiResponse, Error>({
    queryKey: ['upcomingHolidays', selectedCountry, selectedDate],
    queryFn: () => holidayService.getUpcomingHolidays({
      country: selectedCountry,
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth() + 1,
      day: selectedDate.getDate(),
    })
  })

  // Search query
  const { data: searchData, isLoading: isSearchLoading, error: searchError } = useQuery<ApiResponse, Error>({
    queryKey: ['searchHolidays', selectedCountry, searchQuery],
    queryFn: () => holidayService.searchHolidays({
      country: selectedCountry,
      year: selectedDate.getFullYear(),
      search: searchQuery,
    }),
    enabled: isSearching && searchQuery.length >= 5,
  })

  // Update API status when data changes
  React.useEffect(() => {
    if (holidaysData?.requests) {
      setApiStatus(holidaysData.requests)
    } else if (upcomingData?.requests) {
      setApiStatus(upcomingData.requests)
    } else if (searchData?.requests) {
      setApiStatus(searchData.requests)
    }
  }, [holidaysData, upcomingData, searchData])

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      setIsSearching(false)
      setSearchQuery("")
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim() || searchQuery.length < 5) return
    setIsSearching(true)
  }

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditingKey(false)
    // Force a refetch of all queries
    window.location.reload()
  }

  const renderHolidays = (holidays: Holiday[]) => (
    <div className="space-y-3">
      {holidays.map((holiday) => (
        <HolidayCard key={holiday.uuid} holiday={holiday} />
      ))}
    </div>
  )

  const renderApiKeyMessage = () => (
    <Alert className="mb-4">
      <AlertDescription className="space-y-2">
        <p>Please provide an API key to access holiday data. You can either:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Enter your API key in the settings (click the gear icon)</li>
          <li>Add <code className="bg-muted px-1 rounded">VITE_HOLIDAY_API_KEY</code> to your environment variables</li>
        </ul>
        <p className="mt-2">
          <a 
            href="https://holidayapi.com/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Sign up for a free API key at HolidayAPI.com
          </a>
        </p>
      </AlertDescription>
    </Alert>
  )

  const renderError = (error: unknown) => {
    if (error instanceof NoApiKeyError) {
      return renderApiKeyMessage()
    }
    return (
      <Alert variant="destructive">
        <AlertDescription>
          {error instanceof Error ? error.message : 'An error occurred fetching holidays'}
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Public Holidays Calendar</CardTitle>
            <CardDescription>Select a date to check holidays or search for upcoming events</CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditingKey(!isEditingKey)}
          >
            <GearIcon className="h-4 w-4 mr-2" />
            {isEditingKey ? 'Cancel' : 'API Key'}
          </Button>
        </div>
        
        {isEditingKey && (
          <form onSubmit={handleApiKeySubmit} className="mt-4 space-y-2">
            <Input
              type="text"
              placeholder="Enter your HolidayAPI key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="text-sm text-muted-foreground">
              Get your API key at{' '}
              <a 
                href="https://holidayapi.com/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                HolidayAPI.com
              </a>
            </div>
            <Button type="submit" size="sm">Save API Key</Button>
          </form>
        )}

        {apiStatus && (
          <div className="text-xs text-muted-foreground mt-1">
            API Requests: {apiStatus.used}/{apiStatus.used + apiStatus.available} (Resets: {new Date(apiStatus.resets).toLocaleDateString()})
          </div>
        )}
        
        {isApiKeyMissing && !isEditingKey && renderApiKeyMessage()}

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-[180px]" disabled={isApiKeyMissing}>
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <Input
              placeholder="Search for holidays (min 5 characters)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              disabled={isApiKeyMissing}
            />
            <Button 
              type="submit" 
              disabled={isApiKeyMissing || isSearchLoading || searchQuery.length < 5}
              title={
                isApiKeyMissing 
                  ? "API key required" 
                  : searchQuery.length < 5 
                    ? "Search term must be at least 5 characters" 
                    : ""
              }
            >
              {isSearchLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <MagnifyingGlassIcon className="h-4 w-4" />
              )}
              <span className="ml-2">{isSearchLoading ? 'Searching...' : 'Search'}</span>
            </Button>
          </form>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {(holidaysError || upcomingError || searchError) && renderError(holidaysError || upcomingError || searchError)}

        {!isApiKeyMissing && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="rounded-md border"
              />
              <div className="p-4 rounded-md border bg-card">
                <h3 className="font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Selected Date
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {format(selectedDate, 'MMMM d, yyyy')}
                </p>
                {isHolidaysLoading ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  </div>
                ) : holidaysData?.holidays?.length ? (
                  renderHolidays(holidaysData.holidays)
                ) : (
                  <p className="text-sm text-muted-foreground mt-2">No holidays on this date</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {isSearching || searchData?.holidays?.length ? (
                <div className="p-4 rounded-md border bg-card">
                  <h3 className="font-semibold flex items-center gap-2 mb-4">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                    Search Results
                  </h3>
                  {isSearchLoading ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    </div>
                  ) : searchData?.holidays?.length ? (
                    renderHolidays(searchData.holidays)
                  ) : (
                    <p className="text-sm text-muted-foreground">No holidays found matching your search</p>
                  )}
                </div>
              ) : (
                <div className="p-4 rounded-md border bg-card">
                  <h3 className="font-semibold flex items-center gap-2 mb-4">
                    <ChevronRightIcon className="h-4 w-4" />
                    Upcoming Holidays
                  </h3>
                  {isUpcomingLoading ? (
                    <div className="flex items-center justify-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    </div>
                  ) : upcomingData?.holidays?.length ? (
                    renderHolidays(upcomingData.holidays)
                  ) : (
                    <p className="text-sm text-muted-foreground">No upcoming holidays found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <div className="w-full text-center space-y-1">
          <p>
            Powered by{' '}
            <a 
              href="https://holidayapi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              HolidayAPI.com
            </a>
          </p>
          <p>
            Free tier limited to historical and {new Date().getFullYear() - 1} data.{' '}
            <a 
              href="https://holidayapi.com/pricing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Upgrade for current year data
            </a>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
} 