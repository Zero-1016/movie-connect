import { ImageSize, ImageType } from "@/shared/api/constants";

export function getImageUrl<T extends ImageType>(type:T, path: string, size: ImageSize<T>){
    return `https://image.tmdb.org/t/p/${size as string}${path}`
}
