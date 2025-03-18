import { ExamplesPage } from "@/pages/examples";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/examples')({
  component: ExamplesPage
});