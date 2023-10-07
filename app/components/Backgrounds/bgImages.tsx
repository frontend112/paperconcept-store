import bg1 from '@/app/img/background1.jpg'
import bg2 from '@/app/img/background2.jpg'
import bg3 from '@/app/img/background3.jpg'
import bg4 from '@/app/img/background4.jpg'
import bg5 from '@/app/img/background5.jpg'
import { BackgroundType } from "@/app/types/types"

export const bgImages: BackgroundType[] = ([
  {
    id: 1,
    src: bg1,
    name: 'artykuły plastyczne',
    slug: 'plastyczne',
  },
  {
    id: 2,
    src: bg2,
    name: 'podobrazia malarskie',
    slug: 'pismiennicze-i-kaligrafia',
  },
  {
    id: 3,
    src: bg3,
    name: 'koperty',
    slug: 'papiery-i-koperty'
  },
  {
    id: 4,
    src: bg4,
    name: 'farby akwarelowe',
    slug: 'pismiennicze-i-kaligrafia',
  },
  {
    id: 5,
    src: bg5,
    name: 'artykuły piśmiennicze',
    slug: 'papiernicze-i-dla-dzieci',
  },
])
