import { SearchPage } from '@/views'

type Props = {
  searchParams: {
    keyword: string
  }
}

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `${searchParams.keyword} - search`,
    description: `${searchParams.keyword} - search`,
  }
}

export default function Page({ searchParams }: Props) {
  return <SearchPage keyword={searchParams.keyword} />
}
