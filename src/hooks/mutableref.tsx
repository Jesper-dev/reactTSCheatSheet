import { useRef, useEffect } from "react";

export default function App() {
  // Technical-wise, this returns MutableRefObject<number | null>
  const intervalRef = useRef<number | null>(null);

  // You manage the ref yourself (that's why it's called MutableRefObject!)
  useEffect(() => {
    //   intervalRef.current = setInterval(...)
    // return () => clearInterval(intervalRef.current)
  }, []);
  return null;
  //   return <button onClick={/* clearInterval the ref */}>Cancel Timer</button>;
}
