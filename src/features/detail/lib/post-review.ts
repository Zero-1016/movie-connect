type PostType = {
  movieId: number | string
  content: string
}

export const postReview = async (data: PostType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/review`, {
    method: 'POST',
    credentials: 'include',
    cache: 'no-store',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
