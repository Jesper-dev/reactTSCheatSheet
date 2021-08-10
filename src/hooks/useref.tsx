import { useRef, useEffect } from "react";

export const useref = () => {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it

    if (!divRef.current) throw Error("divRef is not assigned"); //Runs if divRef is null

    // Now divRef.current is sure to be HTMLDivElement

    // doSomethingWith(divRef.current)
  }, []);

  // Give the ref to an element so React can manage it for you

  return <div ref={divRef}>etc...</div>;
};
