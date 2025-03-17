import { trpc } from '@/lib/trpc';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HomePage() {
  const [name, setName] = useState('');
  const greeting = trpc.greeting.useQuery({ name: name || 'World' });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to TanStack Router + tRPC</h1>
      <div className="max-w-md">
        <div className="flex gap-4 mb-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <Button onClick={() => greeting.refetch()}>
            Greet
          </Button>
        </div>
        <div className="p-4 bg-secondary rounded-lg">
          <p className="text-lg">{greeting.data}</p>
        </div>
      </div>
    </div>
  );
}