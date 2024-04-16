import { MovieBanner } from '@/entities/ui/MovieBanner'
import RQProvider from "@/shared/lib/react-query/RQProvider";
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
