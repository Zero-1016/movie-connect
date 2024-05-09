import { Avatar } from "@mui/material";

import styles from "@/entities/ui/one-content.module.scss";
import { Content } from "@/shared/api/model";
import { timeAgo } from "@/shared/lib/util";

type Props = {
    content: Content
}

export function OneContent({ content: { id, writer, content, createAt } }: Props) {
    return <li className={styles.comment} key={id}>
        <div className={styles.commentHeader}>
            <div className={styles.commentAvatar}>
                <Avatar src={writer.profileUrl ? writer.profileUrl : undefined}
                        alt={writer.nickname}/> {writer.nickname}
            </div>
            <div>{timeAgo(new Date(createAt))}</div>
        </div>
        <div>{content}</div>
    </li>
}
