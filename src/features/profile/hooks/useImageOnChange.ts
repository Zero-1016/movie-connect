'use client'

import { ChangeEventHandler, useRef, useState } from 'react'

import { UsePutUserProfile } from '@/features/profile/hooks/usePutUserProfile'

export function useImageOnChange() {
  const [imgFile, setImageFile] = useState<string | null>(null)
  const imgRef = useRef<HTMLInputElement>(null)

  const { mutateAsync } = UsePutUserProfile()

  const onChange: ChangeEventHandler<HTMLInputElement> = () => {
    if (!imgRef?.current || !imgRef.current.files) return
    const file = imgRef.current.files[0]
    const formData = new FormData()
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = async () => {
      const profileClientUrl = reader.result
      if (typeof profileClientUrl !== 'string') return
      setImageFile(profileClientUrl)
      formData.append('profile', file)
      await mutateAsync({ formData, url: profileClientUrl })
    }
  }

  return { imgFile, imgRef, onChange }
}
