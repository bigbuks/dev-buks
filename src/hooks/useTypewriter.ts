import { useEffect, useState } from "react";

interface Options {
  /** ms between each character */
  speed?: number;
  /** ms to wait before typing starts */
  startDelay?: number;
  /** whether to actually run */
  enabled?: boolean;
}

export function useTypewriter(
  text: string,
  { speed = 45, startDelay = 0, enabled = true }: Options = {}
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayed("");
    setDone(false);

    let i = 0;
    let tickId: number | undefined;

    const startId = window.setTimeout(() => {
      tickId = window.setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (tickId) window.clearInterval(tickId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startId);
      if (tickId) window.clearInterval(tickId);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}