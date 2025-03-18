import type { RegisteredRouter } from '@tanstack/react-router';
import type { Register } from '@tanstack/react-router';

export type Router = Register['router'];
export type RegisteredRouterType = RegisteredRouter;

export interface RouteParams {
  [key: string]: string | undefined;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}