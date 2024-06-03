import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

import { putUserProfile } from '@/features/profile/lib'

type FetchFUNC = {
  formData: FormData
  url: string
}

export function UsePutUserProfile() {
  const { data: session, update } = useSession()

  return useMutation({
    mutationFn: ({ formData }: FetchFUNC) => putUserProfile(formData),
    onMutate: async ({ url }: FetchFUNC) => {
      const prevUser = session?.user
      if (!prevUser) return
      await update({ image: url })
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
