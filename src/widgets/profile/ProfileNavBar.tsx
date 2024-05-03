import { AccountBox, AccountBoxOutlined, BookmarkOutlined, Reviews, ReviewsOutlined } from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { BookMarked } from "lucide-react";

import { NavButton } from "@/features/Layout";

import styles from './profile-nav-bar.module.scss'

export function ProfileNavBar() {
    return <nav className={styles.navbar}>
        <NavButton activeAllow activeSvg={<AccountBox/>} notActiveSvg={<AccountBoxOutlined/>} link="/profile" title="회원정보 변경"/>
        <NavButton activeAllow activeSvg={<BookmarkOutlined/>} notActiveSvg={<BookMarked/>} link="/profile/activity/like"
                   title="즐겨찾기한 영화"/>
        <NavButton activeAllow activeSvg={<Reviews/>} notActiveSvg={<ReviewsOutlined/>} link="/profile/activity/review"
                   title="작성한 리뷰"/>
        <NavButton activeAllow activeSvg={<ChatIcon/>} notActiveSvg={<ChatOutlinedIcon/>} link="/profile/activity/famous"
                   title="작성한 명대사"/>
    </nav>
}
