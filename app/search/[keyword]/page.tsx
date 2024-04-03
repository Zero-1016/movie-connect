import { SearchPage } from '@/views'

type Props = {
  params: {
    keyword: string
  }
}

export default function Page({ params }: Props) {
  return <SearchPage keyword={params.keyword} />
}
