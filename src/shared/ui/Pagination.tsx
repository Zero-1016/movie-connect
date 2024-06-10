import classNames from 'classnames'

import styles from './pagenation.module.scss'

type Props = {
  curPage: number
  // eslint-disable-next-line unused-imports/no-unused-vars
  callback: (page: number) => void
  total_pages: number
  total_results: number
}

const PAGE_MAX_LENGTH = 5

export function Pagination({ callback, curPage, total_pages, total_results }: Props) {
  const Buttons = new Array(Math.ceil(total_results / total_pages)).fill('').map((_, i) => i + 1)

  const ShowPageNumber = Math.ceil(curPage / PAGE_MAX_LENGTH)
  const ShowButtons = Buttons.filter(
    i => (ShowPageNumber - 1) * PAGE_MAX_LENGTH + 1 <= i && ShowPageNumber * PAGE_MAX_LENGTH + 1 > i,
  )
  const TopPage = Buttons.length

  if (curPage > TopPage) {
    return
  }

  if (Buttons.length === 1) {
    return null
  }

  const ChangePage = (newPage: number) => () => {
    callback(newPage)
  }

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.sideButton, curPage === 1 && styles.isHidden)}
        disabled={curPage === 1}
        onClick={ChangePage(curPage - 1)}
      >
        Prev
      </button>
      {ShowButtons.map(number => (
        <button
          key={number}
          onClick={ChangePage(number)}
          className={classNames(styles.pageButton, curPage === number && styles.selectButton)}
          disabled={curPage === number}
        >
          {number}
        </button>
      ))}
      <button
        className={classNames(styles.sideButton, curPage === TopPage && styles.isHidden)}
        disabled={curPage === TopPage}
        onClick={ChangePage(curPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
