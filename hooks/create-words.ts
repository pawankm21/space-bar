import { useState, useEffect } from "react";
import faker from "@faker-js/faker";

export default function useCreateWords(isGameOver:boolean) {
  const [text, setText] = useState<string>("");
  const [time, setTime] = useState(2);

  useEffect(() => {
    //console.log("isGameOver", isGameOver);
    var interval:any;
    if (!isGameOver) {
      interval = setInterval(() => {
        setText((words) => words + faker.random.word() + " ");
        if (time > 0.5) {
          setTime((time) => time - 0.1);
        }
        //console.log(time);
      }, time * 1000);
      return () => clearInterval(interval);
    }
    else {
      return () => clearInterval(interval);
    }
  }, [time,isGameOver]);
  return { text, setText, time };
}
