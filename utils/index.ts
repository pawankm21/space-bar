export function getAccuracy(correct: number, total: number) {
  return Math.floor((correct / total) * 100);
}
export function getSpeed(
  correct: number,
  startTime: string,
  incorrect: number
) {
  var allTypedEntries = correct + incorrect;
  const now = new Date();
  var diff = new Date(Math.abs(now.getTime() - new Date(startTime).getTime()));
  var ndiff = (diff.getUTCSeconds() + diff.getUTCMinutes() * 60) / 60;
  if (ndiff < 0.01) return 0;
  return Math.round(allTypedEntries / 5 / ndiff);
}

