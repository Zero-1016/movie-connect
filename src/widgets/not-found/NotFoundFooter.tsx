import { HomeButton } from "@/features/landing";

import styles from './not-found-footer.module.scss'

export function NotFoundFooter() {
    return <div className={styles.container}>
        <h2 className={styles.introTitle}>
            길을 잃으셨나요?
        </h2>
        <h3 className={styles.subTitle}>
            저런.. 이 페이지를 보이다니 어색하네요. 존재하지 않는 무언가를 찾고 계셨군요.
        </h3>
        <HomeButton/>
    </div>
}
