import { useCallback, useEffect, useRef } from "react";

export function useFocus<T extends HTMLElement>({
  // Hook Options:
  initialFocus = false,
}) {
  const ref = useRef<T>(null);

  const focus = useCallback(() => ref.current?.focus(), []);

  useEffect(() => {
    initialFocus && focus();
  }, [initialFocus, focus]);

  return { ref, focus };
}
