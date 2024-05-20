import { MovieType } from '@/entities/movie/model/movie'
import { InfinityListAdapter, InfinityListHeader } from '@/widgets/list'

type Props = {
  type: MovieType
}

export function ListPage({ type }: Props) {
  return (
    <div style={{ padding: '100px 0 200px', margin: '0 auto' }}>
      <InfinityListHeader type={type} />
      <InfinityListAdapter type={type} />
    </div>
  )
}
