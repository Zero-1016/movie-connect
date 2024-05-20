import { MovieImageModal } from '@/widgets/modal'

type Props = {
  params: { info: [string, 'backdrop' | 'poster', string] }
}

export default function Page({ params }: Props) {
  return <MovieImageModal movieId={params.info[0]} imageType={params.info[1]} imageUrl={params.info[2]} />
}
