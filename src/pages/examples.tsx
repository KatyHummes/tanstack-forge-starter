import { useState } from 'react';
import { DataTable } from '@/components/examples/data-table';
import { ExampleForm } from '@/components/examples/example-form';
import { HolidayCalendar } from '@/components/examples/holiday-calendar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { trpc } from '@/lib/trpc';

type User = {
  id: string;
  name: string | null;
  email: string;
  role: 'ADMIN' | 'USER';
  clerkId: string;
  createdAt: string;
  updatedAt: string;
};

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
];

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'ADMIN',
    clerkId: 'clerk_1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'USER',
    clerkId: 'clerk_2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function ExamplesPage() {
  const [activeTab, setActiveTab] = useState<string>('table');
  const { data: users = mockUsers } = trpc.user.list.useQuery();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">TanStack Examples</h1>
      <Tabs 
        defaultValue="table" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="form">Form</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Users Table</CardTitle>
              <CardDescription>
                A demonstration of TanStack Table with search and filtering capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable 
                columns={columns} 
                data={users} 
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>Example Form</CardTitle>
              <CardDescription>
                A demonstration of TanStack Form with validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExampleForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <HolidayCalendar />
        </TabsContent>
      </Tabs>
    </div>
  );
}