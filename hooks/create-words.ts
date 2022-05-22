import { useState, useEffect } from "react";
import faker from "@faker-js/faker";

export default function useCreateWords() {
  const [wordCount, setWordCount] = useState(5);
  const [words, setWords] = useState<string[]>([]);
  const [time, setTime] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setWords((words) => [...words, faker.random.word()]);
    }, time * 1000);
    return () => clearInterval(interval);
  }, [time]);
  return { words, setWords, time };
}
