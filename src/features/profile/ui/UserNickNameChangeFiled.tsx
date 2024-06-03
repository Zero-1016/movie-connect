import { zodResolver } from '@hookform/resolvers/zod'
import { Input, InputLabel } from '@mui/material'
import Button from '@mui/material/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { nicknameCheck } from '@/features/auth/lib'
import { usePutUserNickname } from '@/features/profile/hooks'
import { nicknameFiledSchema } from '@/features/profile/schema'

import styles from './user-change-filed.module.scss'

export function UserNickNameChangeFiled() {
  const { mutateAsync } = usePutUserNickname()

  const onSubmit: SubmitHandler<z.infer<typeof nicknameFiledSchema>> = async data => {
    try {
      const { nickname } = data
      await nicknameCheck(nickname)
      const formData = new FormData()
      formData.append('nickname', nickname)
      await mutateAsync({ formData, nickname })
      toast.success('닉네임이 변경되었습니다.')
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      }
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof nicknameFiledSchema>>({
    resolver: zodResolver(nicknameFiledSchema),
    defaultValues: {
      nickname: '',
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel sx={{ display: 'flex', alignItems: 'center' }} htmlFor="nickname">
          <span className={styles.labelName}>닉네임</span>
          <div className={styles.inputButton}>
            <Input
              id="nickname"
              className={styles.input}
              sx={{ background: '#8E95A9' }}
              defaultValue={name}
              {...register('nickname')}
            />
            <Button type="submit" variant="contained" size="small" className={styles.changeButton}>
              변경 하기
            </Button>
          </div>
        </InputLabel>
      </form>
      {errors['nickname'] && <span className={styles.errorMessage}>{errors['nickname']?.message}</span>}
    </>
  )
}
