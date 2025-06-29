import { Control, useWatch } from "react-hook-form";

export const useFormWatchValues = <T extends string>(
  control: Control,
  fieldNames: T[]
): Record<T, string | undefined> => {
  const values = useWatch({ control, name: fieldNames });

  return fieldNames.reduce((acc, key, index) => {
    acc[key] = values?.[index];
    return acc;
  }, {} as Record<T, string | undefined>);
};
