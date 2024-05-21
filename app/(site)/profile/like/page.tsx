import { LikeBody } from '@/widgets/profile'

type Props = {
  searchParams: {
    page: string
  }
}

export default function Page({ searchParams: { page = '1' } }: Props) {
  return <LikeBody page={page} />
}
