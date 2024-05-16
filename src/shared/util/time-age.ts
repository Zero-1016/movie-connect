export function timeAgo(pastDate: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000)

  const minutes = Math.floor(diffInSeconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (diffInSeconds < 60) {
    return `${diffInSeconds} 초 전`
  } else if (minutes < 60) {
    return `${minutes} 분 전`
  } else if (hours < 24) {
    return `${hours} 시간 전`
  } else if (days < 7) {
    return `${days} 일 전`
  } else if (weeks < 4) {
    return `${weeks} 주 전`
  } else if (months < 12) {
    return `${months} 월 전`
  } else {
    return `${years} 년 전`
  }
}
