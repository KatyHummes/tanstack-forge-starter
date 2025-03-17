import { useState } from 'react';
import { DataTable } from '@/components/examples/data-table';
import { ExampleForm } from '@/components/examples/example-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { trpc } from '@/lib/trpc';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
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
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
  },
];

export function ExamplesPage() {
  const { data: users = mockUsers } = trpc.user.list.useQuery();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">TanStack Examples</h1>
      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="form">Form</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Users Table</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={users} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>Example Form</CardTitle>
            </CardHeader>
            <CardContent>
              <ExampleForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}