'use client'

import { TextareaAutosize } from '@mui/material'
import classNames from 'classnames'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { useContentForm } from '@/features/detail/hook'
import { postFamousLine } from '@/features/detail/lib'
import { contentFormSchema } from '@/features/detail/schema'
import { notoSans } from '@/shared/font'

import styles from './detail-content-form.module.scss'

type Props = {
  movieId: number | string
}

export function FamousLineForm({ movieId }: Props) {
  const onSubmit: SubmitHandler<z.infer<typeof contentFormSchema>> = async ({ content }) => {
    try {
      await postFamousLine({ movieId, content })
      reset()
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
  const { handleSubmit, register, reset } = useContentForm()

  return (
    <form className={classNames(styles.formContainer, notoSans.className)} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
        <TextareaAutosize className={styles.textArea} placeholder="명대사 작성하기" {...register('content')} />
      </label>
      <div className={styles.submitButton}>
        <button>등록</button>
      </div>
    </form>
  )
}
