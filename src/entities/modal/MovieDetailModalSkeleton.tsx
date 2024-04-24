"use client"

import { Skeleton } from "@mui/material";

import styles from './movie-detail-modal.module.scss'

export function MovieDetailModalSkeleton() {

    return <div className={styles.container}>
        <div className={styles.leftSection}>
            <Skeleton variant={"rectangular"} width={220} height={330} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
        </div>
        <div className={styles.rightSection}>
            <div className={styles.inner}>
                <h2 className={styles.movieTitle}><Skeleton variant={"rectangular"} width={200} height={32} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/></h2>
                <desc className={styles.description}><Skeleton variant={"rectangular"} width={440} height={134} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/></desc>
                <div className={styles.chipBox}>
                    <Skeleton variant={"rectangular"} width={100} height={22} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                </div>
                <div>
                    <Skeleton variant={"rectangular"} width={200} height={22} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                </div>
            </div>
            <div className={styles.inner}>
                <div className={styles.ratingBox}>
                    <Skeleton variant={"rectangular"} width={140} height={16} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                    <span>
                        <Skeleton variant={"rectangular"} width={130} height={28} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                    </span>
                </div>
                <Skeleton variant={"rectangular"} width={200} height={36} sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
            </div>
        </div>
    </div>
}
