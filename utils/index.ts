export function getAccuracy(correct: number, total: number) {
  return Math.floor((correct / total) * 100);
}
export function getSpeed(
  chars: number,
  startTime: number
) {
  var allTypedEntries = chars;
  const now = new Date();
  var diff = new Date(Math.abs(now.getTime() - startTime));
  var ndiff = (diff.getUTCSeconds() + diff.getUTCMinutes() * 60) / 60;
  if (ndiff < 0.01) return 0;
  return Math.round(allTypedEntries / 5 / ndiff);
}

