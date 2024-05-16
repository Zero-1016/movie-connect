'use client'

import { ChangeEventHandler, useState } from 'react'

export function useImageOnChange() {
  const [file, setFile] = useState<File | null>(null)

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.target.files
    if (target === null) return
    setFile(target[0])
    e.target.value = ''
  }

  return { file, onChange }
}
