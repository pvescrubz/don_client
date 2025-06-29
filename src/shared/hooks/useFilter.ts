import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useFilter = (
  queryName: string,
  multi: boolean = false,
  debounce: number = 500
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [firstRender, setFirstRender] = useState(true);

  const [singleValue, setSingleValue] = useState<string>(
    searchParams?.get(queryName) || ""
  );

  const debouncedValue = useDebounce(singleValue, debounce);

  useEffect(() => {
    const newFrom = searchParams?.get(queryName) || "";
    if (singleValue !== newFrom) setSingleValue(newFrom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (multi) return;

    const params = new URLSearchParams(searchParams?.toString());

    if (debouncedValue) {
      params.set(queryName, debouncedValue);
    } else {
      params.delete(queryName);
    }

    if (queryName !== "page") {
      params.set("page", "1");
    }

    if (firstRender) return;
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const toggleSingleFilterValue = (value: string, pattern?: RegExp | null) => {
    const newValue = pattern ? value.replace(pattern, "") : value;
    setSingleValue(newValue);
    setFirstRender(false);
  };

  const toggleMultiFilterValue = (val: string) => {
    const params = new URLSearchParams(searchParams?.toString());

    const raw = params.get(queryName) || "";
    const current = raw ? raw.split(",") : [];

    let updated: string[];
    if (current.includes(val)) {
      updated = current.filter((v) => v !== val);
    } else {
      updated = [...current, val];
    }

    if (updated.length > 0) {
      params.set(queryName, updated.join(","));
    } else {
      params.delete(queryName);
    }
    if (queryName !== "page") {
      params.set("page", "1");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setFirstRender(false);
  };

  const isActive = (val: string) => {
    const raw = searchParams?.get(queryName) || "";
    return raw.split(",").includes(val);
  };

  return {
    singleValue,
    isActive,
    toggleSingleFilterValue,
    toggleMultiFilterValue,
  };
};
