import RQProvider from "@/shared/lib/react-query/RQProvider";
import { MainBannerSection, MainList } from '@/widgets/Main'

export function MainPage() {
  return (
    <>
      <RQProvider>
        <MainBannerSection />
        <MainList />
      </RQProvider>
    </>
  )
}
