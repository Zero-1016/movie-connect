import { toast } from 'react-toastify'

export async function copyLink(url: string) {
  try {
    await navigator.clipboard.writeText(url)
    toast.success('링크가 복사되었습니다.')
  } catch (err) {
    if (err instanceof Error) {
      toast.error(err.message)
    }
  }
}
