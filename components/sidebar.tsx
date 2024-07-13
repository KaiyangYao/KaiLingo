import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from './sidebar-item'

type Props = {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className,
      )}
    >
      <Link href="learn">
        <div className="pt-8 pl-6 pb-7 flex items-center gap-x-3">
          <Image src="KaiLingo-Icon.svg" height={40} width={40} alt="Icon" />
          <h1 className="text-2xl font-extrabold text-sky-600 tracking-wide">KaiLingo</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="learn" href="/learn" iconSrc="/icons/learn.svg" />
        <SidebarItem label="leaderboard" href="/leaderboard" iconSrc="/icons/leaderboard.svg" />
        <SidebarItem label="quests" href="/quests" iconSrc="/icons/quests.svg" />
        <SidebarItem label="shop" href="/shop" iconSrc="/icons/shop.svg" />
      </div>
    </div>
  )
}
