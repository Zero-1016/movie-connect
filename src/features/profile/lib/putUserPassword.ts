export const putUserPassword = async (formData: FormData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/password`, {
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
