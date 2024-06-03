export const postMovieBookMark = async (movieId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/bookmark`, {
    method: 'POST',
    credentials: 'include',
    cache: 'no-store',
    body: JSON.parse(movieId),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
