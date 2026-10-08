import { useEffect, useRef, useState } from "react";

interface Options {
  /** starting number */
  from?: number;
  /** duration in ms */
  duration?: number;
  /** decimals to show */
  decimals?: number;
  /** start the animation */
  start?: boolean;
}

export function useCountUp(
  target: number,
  { from = 0, duration = 1600, decimals = 0, start = true }: Options = {}
) {
  const [value, setValue] = useState(from);
  const rafRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const delta = target - from;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // ease-out-cubic for a satisfying slowdown at the end
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + delta * eased);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, from, duration, start]);

  return Number(value.toFixed(decimals));
}