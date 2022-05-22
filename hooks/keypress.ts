import { useState, useEffect } from "react";
export default function useKeyPress(callback: (key?: any) => any) {
  const [keyPressed, setKeyPressed] = useState<any>();
  useEffect(() => {
    const downHandler = ({ key }: any) => {
      if (key === " " || (key.length === 1 && key.match(/^[A-Za-z0-9]+$/))) {
        setKeyPressed(key);
        callback && callback(key);
      }
    };
    const upHandler = ({ key }: any) => {
      setKeyPressed(null);
    };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });
  return keyPressed;
}
