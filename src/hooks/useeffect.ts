import { useEffect } from "react";

export function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;

  //   useEffect(
  //     () =>
  //       setTimeout(() => {
  //         /* do stuff */
  //       }, timerMs),
  //     [timerMs]
  //   );

  // bad example! setTimeout implicitly returns a number
  // because the arrow function body isn't wrapped in curly braces
  //   return null;

  useEffect(() => {
    setTimeout(() => {
      //Do Something
    }, timerMs);
  }, [timerMs]);
  // better; use the void keyword to make sure you return undefined
  return null;
}
