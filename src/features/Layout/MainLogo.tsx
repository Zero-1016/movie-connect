import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { poppins } from "@/shared/style/poppins";

import mainLogo from '../../../public/svg/main-logo.svg'
import styles from './main-logo.module.scss'

export function MainLogo() {
    return <Link href={'/home'} className={styles.container}>
        <div className={styles.leftSection}>
            <Image src={mainLogo} alt="메인로고"/>
            <div className={classNames(poppins.className, styles.mainLogo)}>MovieConnect</div>
        </div>
    </Link>
}
