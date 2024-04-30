export function getScrollbarWidth() {
    // 스크롤바를 포함하는 컨테이너를 생성
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // 스크롤바가 확실히 나타나도록 설정
    document.body.appendChild(outer);

    // 내부 요소 추가
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // 스크롤바 너비 계산
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // 생성된 요소 제거
    outer.parentNode?.removeChild(outer);

    return scrollbarWidth;
}
