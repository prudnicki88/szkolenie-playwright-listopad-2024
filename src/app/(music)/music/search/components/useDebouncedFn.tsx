import { useEffect } from "react";

export function useDebouncedFn<T>(
  value: T,
  callback: (value: T | undefined) => void,
  timeout = 500
) {
  useEffect(() => {
    const handler = setTimeout(() => callback(value), timeout);
    return () => clearTimeout(handler);
  }, [value, callback, timeout]);
}
