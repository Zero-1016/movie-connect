import { SearchPage } from '@/views'

type Props = {
  searchParams: {
    keyword: string
  }
}

export default function Page({ searchParams }: Props) {
  return <SearchPage keyword={searchParams.keyword} />
}
