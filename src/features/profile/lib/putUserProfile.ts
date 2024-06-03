export const putUserProfile = async (formData: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/profile`, {
    method: 'PUT',
    body: formData,
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
