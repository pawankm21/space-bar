export function getAccuracy(correct: number, total: number) {
  return Math.floor((correct / total) * 100);
}
export function getSpeed(
  correct: number,
  startTime: string,
  incorrect: number
) {
  // console.log(
  //   "typed: ",
  //   typed,
  //   " wrongCount: ",
  //   wrongCount,
  //   " startTime: ",
  //   startTime
  // );
  // if (startTime == null) return 0;
  // const now = new Date();
  // return Math.floor(
  //   ((typed.length / 5 - wrongCount) * 1000) / (now - startTime)
  // );
  var allTypedEntries = correct + incorrect;
  const now = new Date();
  var diff = new Date(Math.abs(now.getTime() - new Date(startTime).getTime()));
  var ndiff = (diff.getUTCSeconds() + diff.getUTCMinutes() * 60) / 60;
  if (ndiff < 0.01) return 0;
  return Math.round(allTypedEntries / 5 / ndiff);
}

export function displayTyping(e: any, text: any, setTyped: any) {
  setTyped(
    e.target.value.split("").map((char: any, index: any) => {
      if (char === text[index]) {
        return "text-green-400";
      } else if (char !== text[index] && text[index] === " ") {
        return "bg-red-400";
      }
      return "text-red-400";
    })
  );
}
