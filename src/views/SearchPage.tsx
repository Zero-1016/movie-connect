type Props = {
  keyword: string
}

export function SearchPage({ keyword }: Props) {
  console.info(keyword)
  return <div>Search</div>
}
