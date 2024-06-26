# 🎬 AI를 활용한 영화 추천 및 다양한 서비스 제공 플랫폼

<div align="center">
<img src="https://github.com/Zero-1016/movie-connect/assets/115636461/a01d3cc0-76e2-4fb4-9521-0ff6abc525b5" width="800px"/>
</div>

## 🔗 프로젝트 링크

- [API 문서](https://aboard-creator-055.notion.site/faa0cf0d37034c11b0b0d94da3525778?v=12b9899bb55e4894896132e49e3b56e7&pvs=4)
- [피그마 URL](https://www.figma.com/design/q9JJd6bmpECOb9GBubKlaG/starbucks-ban?node-id=6-2&t=S9gW0gBRk2b2ObxN-1)
- [노션 URL](https://aboard-creator-055.notion.site/693c3021d9444753a95ef6acdec84507?v=5d4e91435ec441d797c4d5bde19c9b88&pvs=4)

<br />

## 📖 개요

Movie Connect는 AI 기술을 활용하여 사용자 성향에 맞는 영화를 추천해주는 플랫폼입니다. 최신 영화 정보를 제공하며, 다양한 영화 관련 서비스를 제공합니다.

<br />

## ⚡ 주요 서비스 소개

**메인 페이지**

- 최신 영화의 시네마틱 영상을 자동 재생합니다.
- 로그인 시 사이트 어느 곳에서나 ChatGPT API를 활용하여 영화 추천 및 검색이 가능합니다.
- TMDB API를 활용하여 최신 영화, 인기 영화, 별점 높은 영화 등 다양한 관점에서 영화를 조회할 수 있습니다.

**상세 페이지**

- 영화의 상세 정보, 한 줄 소개, 관련 정보, 영화 포스터 등을 확인할 수 있습니다.
- 관심 있는 영화를 즐겨찾기에 추가하고, 마이페이지에서 확인할 수 있습니다.
- 리뷰 및 명대사를 공유하며 영화에 대한 다양한 정보를 미리 볼 수 있습니다.

**검색 페이지**

- 최신 영화 정보부터 과거 영화 정보까지 TMDB API를 활용하여 검색할 수 있습니다.
- 무한 스크롤 기능을 통해 페이지네이션 없이 많은 정보를 편리하게 확인할 수 있습니다.

**인증 기능**

- 이메일, 비밀번호, 닉네임을 통해 회원가입할 수 있습니다.
- 회원가입 정보를 이용해 로그인할 수 있습니다.
- 서버에서 받아온 쿠키를 통해 안전하게 인증 정보를 관리합니다.

**마이 페이지**

- 프로필 이미지, 닉네임, 비밀번호 등의 사용자 정보 수정을 할 수 있습니다.
- 즐겨찾기한 영화 정보를 모아볼 수 있습니다.
- 작성한 명대사 및 리뷰 정보를 모아볼 수 있습니다.

## 👨‍🎓 기술적 성취
- 사용자 설문을 통한 가치 창출 경험
- SiteMap 및 Metadata 설정을 통한 SEO 최적화 경험
- FSD 아키텍처 적용 경험

<br />

## 🚀 성능 최적화
- 초기 렌더링 속도 향상을 위해 SSR 도입을 통한 사용자 경험 최적화
- generateMetadata를 통한 메타데이터 설정으로 공유 최적화
- 웹 폰트 다운로드 시간을 줄이기 위해 woff2 확장자 추가 및 nextJS의 localfont 사용
- 필요한 시점에 이미지를 불러오도록 lazy loading 적용 및 layout shift를 방지하기 위한 Next.js image 태그 적용
- react-hook-form과 zod를 사용하여 불필요한 리렌더링 방지 및 유효성 검사
- 불필요한 API 요청을 방지하기 위해 tanstack-query를 활용한 데이터 캐싱
