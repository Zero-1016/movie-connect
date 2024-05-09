"use client"

import { usePathname } from "next/navigation";

export function useProfilePath() {
    const path = usePathname().split('/').at(-1);

    switch (path) {
        case "profile":
            return { title: "내 정보 수정", subTitle: "나의 정보를 수정 할 수 있습니다." }
        case "famous":
            return { title: "내가 작성한 명대사", subTitle: "내가 작성한 명대사들을 확인합니다." }
        case "like":
            return { title: "즐겨찾기한 영화", subTitle: "내가 즐겨찾기한 영화를 확인합니다." }
        case "review":
            return { title: "내가 작성한 리뷰", subTitle: "내가 작성한 리뷰들을 확인합니다." }
        default:
            return { title: "없는 주제입니다.", subTitle: "없는 소주제입니다." }
    }
}
