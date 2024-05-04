import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { NavButton } from "@/features/layout/NavButton";

import styles from './header-nav.module.scss'

export function HeaderNav() {
    return <nav className={styles.container}>
        <NavButton tooltip={"홈으로"} activeSvg={<HomeIcon/>} notActiveSvg={<HomeOutlinedIcon/>} link="/home" title="Home"/>
        <NavButton tooltip={"인기영화 보러가기"} activeSvg={<FavoriteIcon/>} notActiveSvg={<FavoriteBorderOutlinedIcon/>} link="/list/popular"
                   title="Popular"/>
        <NavButton tooltip={"별점이 높은 영화 보러가기"} activeSvg={<StarIcon/>} notActiveSvg={<StarBorderOutlinedIcon/>} link="/list/top-rated"
                   title="Top Rated"/>
        <NavButton tooltip={"최신 영화 보러가기"} activeSvg={<EditCalendarIcon/>} notActiveSvg={<EditCalendarOutlinedIcon/>} link="/list/upcoming"
                   title="Recent"/>
    </nav>
}
