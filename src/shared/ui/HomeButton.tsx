import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/shared/ui/index'

export function HomeButton() {
  return (
    <Link href={'/home'}>
      <Button>
        Home <ArrowRight size={32} />
      </Button>
    </Link>
  )
}
