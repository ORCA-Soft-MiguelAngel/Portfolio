import { useRef, useLayoutEffect } from "react";

type getScollPositonProps = { element?: any | null; useWindow?: any | null };

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({ element, useWindow }: getScollPositonProps) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(effect?:any|null, deps?:any|null, element?:any|null, useWindow?:any|null, wait?:any|null) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout:any = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}
