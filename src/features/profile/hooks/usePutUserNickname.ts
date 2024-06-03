import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { putUserNickname } from '@/features/profile/lib'

type FetchFUNC = {
  formData: FormData
  nickname?: string
}

export function usePutUserNickname() {
  const { data: session, update } = useSession()

  return useMutation({
    mutationFn: ({ formData }: FetchFUNC) => putUserNickname(formData),
    onMutate: async ({ nickname }: FetchFUNC) => {
      const prevUser = session?.user
      if (!prevUser) return
      await update({ nickname })
      return { prevUser }
    },
    onError: async (_1, _2, context) => {
      await update({ ...context?.prevUser })
    },
    onSettled: async () => {
      await update()
    },
  })
}
