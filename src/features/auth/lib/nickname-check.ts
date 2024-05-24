export async function nicknameCheck(nickname: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/nickname?nickname=${nickname}`, {
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
