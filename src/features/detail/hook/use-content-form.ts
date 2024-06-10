'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { contentFormSchema } from '@/features/detail/schema'

type ContentFormSchema = z.infer<typeof contentFormSchema>

export function useContentForm() {
  return useForm<ContentFormSchema>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: {
      content: '',
    },
  })
}
