'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaUsers, FaBell, FaUser } from 'react-icons/fa'

export default function BottomNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  const activeColor = '#2563eb' // Tailwind blue-600
  const inactiveColor = '#4b5563' // Tailwind gray-600

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full">
          <FaHome size={24} color={isActive('/') ? activeColor : inactiveColor} />
          <span className={`text-xs mt-1 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}>Home</span>
        </Link>
        <Link href="/network" className="flex flex-col items-center justify-center w-full h-full">
          <FaUsers size={24} color={isActive('/network') ? activeColor : inactiveColor} />
          <span className={`text-xs mt-1 ${isActive('/network') ? 'text-blue-600' : 'text-gray-600'}`}>Network</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center justify-center w-full h-full">
          <FaBell size={24} color={isActive('/notifications') ? activeColor : inactiveColor} />
          <span className={`text-xs mt-1 ${isActive('/notifications') ? 'text-blue-600' : 'text-gray-600'}`}>Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full">
          <FaUser size={24} color={isActive('/profile') ? activeColor : inactiveColor} />
          <span className={`text-xs mt-1 ${isActive('/profile') ? 'text-blue-600' : 'text-gray-600'}`}>Profile</span>
        </Link>
      </div>
    </nav>
  )
} 