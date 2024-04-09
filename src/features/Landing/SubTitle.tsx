'use client'

import { useTextInterval } from '@/features/Landing/hooks'
import * as style from '@/features/Landing/LandingLeftSection.css'

const subTitleList = [
  '최신 영화 소식과 함께, 당신의 다음 영화 여행을 위한 시작점입니다.',
  '지금 어떤 영화가 뜨고 있는지 확인하고, 영화 팬들과 함께 소통하세요.',
  '영화의 감동을 함께 나누는 곳, 누구나 즐길 수 있는 영화 커뮤니티입니다.',
  '모든 영화 팬을 위한 특별한 장소, 당신의 영화 이야기를 들려주세요.',
  '당신의 취향과 맞는 영화를 찾고, 다양한 리뷰와 명대사를 만나보세요.',
  '영화 속 세계로 빠져들어보세요. 현재 상영중인 영화부터 과거 명작까지 즐기세요.',
  '영화를 사랑하는 사람들을 위한 온라인 공간, 다양한 의견을 나누며 영화를 더 즐겨보세요.',
  '영화의 감동과 재미를 함께 나누는 커뮤니티, 다양한 영화 추천과 리뷰를 만나보세요.',
  '당신이 찾는 모든 영화 정보가 여기 있습니다. 상영 중, 개봉 예정, 그리고 과거의 인기작까지 모두 한 곳에서.',
]

export function SubTitle() {
  const subTitle = useTextInterval(subTitleList, 100)
  return <div className={style.subTitle}>{subTitle}</div>
}
