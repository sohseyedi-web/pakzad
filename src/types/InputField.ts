import { FieldErrors, FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';

export type ValidationSchemaTypes = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type InputTypes<T extends Record<string, any>> = {
  label: string;
  name: keyof T;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  value?: string;
  onChange?: React.ChangeEventHandler;
  long?: boolean;
};

export interface RadioRHFProps {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  watch: UseFormReturn['watch'];
}

export interface RadioInputProps extends RadioRHFProps {
  label: string;
  name: string;
  id: string;
  validationSchema?: ValidationSchemaTypes;
  value: string;
}

export interface RadioInputGroupsProps extends RadioRHFProps {
  configs: {
    name: string;
    validationSchema?: {
      required: string;
    };
    options: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string }
    ];
  };
}
