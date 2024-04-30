import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { NavButton } from "@/features/Layout/NavButton";

import styles from './header-nav.module.scss'

export function HeaderNav() {
    return <nav className={styles.container}>
        <NavButton activeSvg={<HomeIcon/>} notActiveSvg={<HomeOutlinedIcon/>} link="/home" title="Home"/>
        <NavButton activeSvg={<FavoriteIcon/>} notActiveSvg={<FavoriteBorderOutlinedIcon/>} link="/list/popular"
                   title="Popular"/>
        <NavButton activeSvg={<StarIcon/>} notActiveSvg={<StarBorderOutlinedIcon/>} link="/list/top-rated"
                   title="TopRated"/>
        <NavButton activeSvg={<EditCalendarIcon/>} notActiveSvg={<EditCalendarOutlinedIcon/>} link="/list/upcoming"
                   title="Recent"/>
    </nav>
}
