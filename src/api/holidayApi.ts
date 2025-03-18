import { HolidayAPI } from 'holidayapi'

export interface Holiday {
  uuid: string
  name: string
  date: string
  observed: string
  public: boolean
  subdivisions?: string[]
}

export interface ApiResponse {
  holidays: Holiday[]
  requests: {
    used: number
    available: number
    resets: string
  }
  status: number
  warning?: string
}

export class NoApiKeyError extends Error {
  constructor() {
    super('No API key provided')
    this.name = 'NoApiKeyError'
  }
}

// Get API key from localStorage or fallback to env variable
const getApiKey = () => {
  const storedKey = typeof window !== 'undefined' ? localStorage.getItem('holiday-api-key') : null
  return storedKey || import.meta.env.VITE_HOLIDAY_API_KEY || null
}

// Create API instance with current key
const createHolidayApi = () => {
  const key = getApiKey()
  if (!key) {
    throw new NoApiKeyError()
  }
  return new HolidayAPI({ key })
}

// Maximum year we can access from the API (free tier limitation)
// Can be overridden by setting VITE_MAX_HOLIDAY_YEAR in .env
const MAX_ACCESSIBLE_YEAR = parseInt(import.meta.env.VITE_MAX_HOLIDAY_YEAR || '2024', 10)

// Helper function to ensure we're using an accessible year
const getAccessibleYear = (requestedYear: number): number => {
  // If requested year is beyond our max accessible year, use max accessible year
  return requestedYear > MAX_ACCESSIBLE_YEAR ? MAX_ACCESSIBLE_YEAR : requestedYear
}

export const holidayService = {
  getHolidays: async (params: { country: string; year: number; month?: number; day?: number }): Promise<ApiResponse> => {
    try {
      const holidayApi = createHolidayApi()
      const response = await holidayApi.holidays({
        ...params,
        year: getAccessibleYear(params.year)
      })
      return {
        ...response,
        holidays: response.holidays || []
      } as ApiResponse
    } catch (error) {
      console.error('Holiday API error:', error)
      throw error
    }
  },

  getUpcomingHolidays: async (params: { country: string; year: number; month?: number; day?: number }): Promise<ApiResponse> => {
    try {
      const holidayApi = createHolidayApi()
      const response = await holidayApi.holidays({
        ...params,
        year: getAccessibleYear(params.year),
        upcoming: true
      })
      return {
        ...response,
        holidays: response.holidays || []
      } as ApiResponse
    } catch (error) {
      console.error('Holiday API error:', error)
      throw error
    }
  },

  searchHolidays: async (params: { country: string; year: number; search: string }): Promise<ApiResponse> => {
    try {
      const holidayApi = createHolidayApi()
      const response = await holidayApi.holidays({
        ...params,
        year: getAccessibleYear(params.year)
      })
      return {
        ...response,
        holidays: response.holidays || []
      } as ApiResponse
    } catch (error) {
      console.error('Holiday API error:', error)
      throw error
    }
  }
} 