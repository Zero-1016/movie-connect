interface BodyData {
  email: string
  pw: string
}

export async function signIn(bodyData: BodyData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/sign-in`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
    },
    body: JSON.stringify(bodyData),
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
