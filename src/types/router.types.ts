import type { RegisteredRouter } from '@tanstack/react-router';
import type { router } from '@/routes';

export type Router = typeof router;
export type RegisteredRouterType = RegisteredRouter<Router>;

export interface RouteParams {
  [key: string]: string | undefined;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}