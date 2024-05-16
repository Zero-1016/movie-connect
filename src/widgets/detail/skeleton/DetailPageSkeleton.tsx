'use client'

import { Skeleton } from '@mui/material'
import classNames from 'classnames'

import { poppins } from '@/shared/font'
import { useBlockScroll } from '@/shared/hook/use-block-scroll'
import middle_styles from '@/widgets/detail/section/middle-section.module.scss'
import top_styles from '@/widgets/detail/section/top-section.module.scss'

export function DetailPageSkeleton() {
  useBlockScroll()
  return (
    <>
      <section className={top_styles.container}>
        <div className={top_styles.imageContainer}>
          <Skeleton
            variant="rectangular"
            height={720}
            sx={{
              width: '100%',
              maxWidth: '1200px',
              borderRadius: '40px',
              height: '100%',
              backgroundColor: 'rgba(255,255,255, 30%)',
            }}
          />
        </div>
      </section>
      <section className={middle_styles.container}>
        <div className={middle_styles.leftSection}>
          <Skeleton
            variant="rectangular"
            width={480}
            height={720}
            sx={{
              borderRadius: '24px',
              height: '100%',
              backgroundColor: 'rgba(255,255,255, 30%)',
            }}
          />
        </div>
        <div className={classNames(middle_styles.rightSection, poppins.className)}>
          <h3 className={middle_styles.tagLine}>
            <Skeleton
              variant="rectangular"
              width={200}
              height={32}
              sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}
            />
          </h3>
          <span className={middle_styles.description}>
            <Skeleton
              width={540}
              variant="rectangular"
              height={720}
              sx={{ width: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}
            />
          </span>
          <div className={middle_styles.averageBox}></div>
          <h6 className={middle_styles.descriptionTitle}>상영 날짜</h6>
          <h5 className={middle_styles.descriptionContent}></h5>
          <h6 className={middle_styles.descriptionTitle}>재생 시간</h6>
          <h5 className={middle_styles.descriptionContent}></h5>
          <h6 className={middle_styles.descriptionTitle}>장르</h6>
          <h5 className={middle_styles.descriptionContent}></h5>
        </div>
      </section>
    </>
  )
}
