'use client'

import { TextareaAutosize } from '@mui/material'
import classNames from 'classnames'
import { ChangeEventHandler, useState } from 'react'

import { notoSans } from '@/shared/font'

import styles from './detail-content-form.module.scss'

export function DetailContentForm() {
  const [content, setContent] = useState('')

  const onSubmit = () => {}

  const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = e => {
    setContent(e.target.value)
  }

  return (
    <form
      className={classNames(styles.formContainer, notoSans.className)}
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <label className={styles.label}>
        <TextareaAutosize
          className={styles.textArea}
          value={content}
          onChange={onChangeContent}
          placeholder="나의 리뷰 작성하기"
        />
      </label>
      <div className={styles.submitButton}>
        {content.length}/200
        <button type="submit" disabled={!content?.trim()}>
          등록
        </button>
      </div>
    </form>
  )
}
