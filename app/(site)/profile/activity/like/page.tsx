import { generateMovie } from "@/shared/mock/construct";
import { LikeBody } from "@/widgets/profile";

export default function Page() {
  const mockMovieData = generateMovie(10)
  return <LikeBody movieList={mockMovieData}/>
}
