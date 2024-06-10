'use client'

import { useState } from 'react'

export function usePagination(initialState?: number) {
  const [curPage, setCurPage] = useState(initialState ? () => initialState : 1)
  return { curPage, setCurPage }
}
