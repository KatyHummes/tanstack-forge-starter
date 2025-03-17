import { createFileRoute } from '@tanstack/react-router';
import { ExamplesPage } from '@/pages/examples';

export const Route = createFileRoute('/examples/')({
  component: ExamplesPage,
});