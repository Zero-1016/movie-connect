import { Bookmark, MessageCircleMore, MessageSquareText, UserRound } from "lucide-react";

import { NavButton } from "@/features/layout";

import styles from './profile-nav-bar.module.scss'

export function ProfileNavBar() {
    return <nav className={styles.navbar}>
        <NavButton activeAllow={true} activeSvg={<UserRound fill="#ffffff" />} notActiveSvg={<UserRound />} link="/profile" title="회원정보 변경"/>
        <NavButton activeAllow={true} activeSvg={<Bookmark fill="#ffffff" />} notActiveSvg={<Bookmark/>} link="/profile/activity/like"
                   title="즐겨찾기한 영화"/>
        <NavButton activeAllow={true} activeSvg={<MessageSquareText fill="#ffffff" stroke="#e0e0e0 "/>} notActiveSvg={<MessageSquareText />} link="/profile/activity/review"
                   title="작성한 리뷰"/>
        <NavButton activeAllow={true} activeSvg={<MessageCircleMore fill="#ffffff" stroke="#e0e0e0 "/>} notActiveSvg={<MessageCircleMore />} link="/profile/activity/famous"
                   title="작성한 명대사"/>
    </nav>
}
