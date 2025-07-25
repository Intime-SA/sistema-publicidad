import { Download, RefreshCw, Wallet } from 'lucide-react'
import React from 'react'
import { PageSelector } from './filters/pages-selector'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { DateRangePicker } from './DateRangePicker'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
    <div className="flex items-center gap-2 font-semibold">
      <Wallet className="h-6 w-6 text-primary" />
      <span>Casino LCP Analytics</span>
    </div>
    <div className="ml-auto flex items-center gap-4">
      <PageSelector />
      <DateRangePicker />
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
        <AvatarFallback>AD</AvatarFallback>
      </Avatar>
    </div>
  </header>
  )
}

export default Header