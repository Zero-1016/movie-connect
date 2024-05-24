export async function emailCheck(nickname: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/email?email=${nickname}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
