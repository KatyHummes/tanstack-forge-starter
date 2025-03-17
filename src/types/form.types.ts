import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

export type FormSchema<T extends FieldValues> = z.ZodType<T>;

export interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void | Promise<void>;
}

export interface FieldProps<T extends FieldValues> {
  name: keyof T;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}