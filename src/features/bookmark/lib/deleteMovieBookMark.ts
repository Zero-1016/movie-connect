export const deleteMovieBookMark = async (movieId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/bookmark/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
