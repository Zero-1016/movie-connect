import { zodResolver } from '@hookform/resolvers/zod'
import { Input, InputLabel } from '@mui/material'
import Button from '@mui/material/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { nicknameCheck } from '@/features/auth/lib'
import { putUserPassword } from '@/features/profile/lib'
import { passwordFiledSchema } from '@/features/profile/schema'

import styles from './user-change-filed.module.scss'

export function UserPasswordChangeFiled() {
  const onSubmit: SubmitHandler<z.infer<typeof passwordFiledSchema>> = async data => {
    try {
      const { prevPassword, password } = data
      if (typeof prevPassword !== 'string') return
      await nicknameCheck(password)
      const formData = new FormData()
      formData.append('prevPassword', prevPassword)
      formData.append('password', password)
      await nicknameCheck(password)
      await putUserPassword(formData)
      toast.success('비밀번호가 변경되었습니다.')
      reset()
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof passwordFiledSchema>>({
    resolver: zodResolver(passwordFiledSchema),
    defaultValues: {
      prevPassword: '',
      password: '',
      confirmPassword: '',
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
          <span className={styles.labelName}>이전 비밀번호</span>
          <Input
            type="password"
            className={styles.input}
            sx={{ background: '#8E95A9' }}
            defaultValue={name}
            {...register('prevPassword')}
          />
        </InputLabel>
        <InputLabel>
          <span className={styles.labelName}>새 비밀번호</span>
          <Input
            type="password"
            className={styles.input}
            sx={{ background: '#8E95A9' }}
            defaultValue={name}
            {...register('password')}
          />
        </InputLabel>
        <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
          <span className={styles.labelName}>비밀번호 확인</span>
          <div className={styles.inputButton}>
            <Input
              type="password"
              className={styles.input}
              sx={{ background: '#8E95A9' }}
              defaultValue={name}
              {...register('confirmPassword')}
            />
            <Button type="submit" variant="contained" size="small" className={styles.changeButton}>
              변경 하기
            </Button>
          </div>
        </InputLabel>
      </form>
      {errors.prevPassword ? (
        <span className={styles.errorMessage}>{errors.prevPassword.message}</span>
      ) : errors.password ? (
        <span className={styles.errorMessage}>{errors.password.message}</span>
      ) : errors.confirmPassword ? (
        <span className={styles.errorMessage}>{errors.confirmPassword.message}</span>
      ) : null}
    </>
  )
}
