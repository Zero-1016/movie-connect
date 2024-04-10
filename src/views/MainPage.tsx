import RQProvider from '@/app/RQProvider'
import { MovieBanner } from '@/entities/ui/MovieBanner'
import { MainList } from '@/widgets/Main'

export function MainPage() {
  return (
    <div>
      <RQProvider>
        <MovieBanner />
        <MainList />
      </RQProvider>
    </div>
  )
}
