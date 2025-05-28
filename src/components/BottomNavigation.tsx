'use client'

import { HomeIcon, UserGroupIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full">
          <HomeIcon className={`w-6 h-6 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs mt-1 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}>Home</span>
        </Link>
        <Link href="/network" className="flex flex-col items-center justify-center w-full h-full">
          <UserGroupIcon className={`w-6 h-6 ${isActive('/network') ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs mt-1 ${isActive('/network') ? 'text-blue-600' : 'text-gray-600'}`}>Network</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center justify-center w-full h-full">
          <BellIcon className={`w-6 h-6 ${isActive('/notifications') ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs mt-1 ${isActive('/notifications') ? 'text-blue-600' : 'text-gray-600'}`}>Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full">
          <UserIcon className={`w-6 h-6 ${isActive('/profile') ? 'text-blue-600' : 'text-gray-600'}`} />
          <span className={`text-xs mt-1 ${isActive('/profile') ? 'text-blue-600' : 'text-gray-600'}`}>Profile</span>
        </Link>
      </div>
    </nav>
  )
} 