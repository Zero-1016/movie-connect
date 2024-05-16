export function getHour(minute: number) {
  const hour = Math.floor(minute / 60)
  const min = Math.floor(minute % 60)

  if (hour > 0) {
    return `${hour}시 ${min}분`
  }
  return `${min}분`
}
