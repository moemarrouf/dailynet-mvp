import React from 'react'

interface PhoneFrameWrapperProps {
  children: React.ReactNode
}

export default function PhoneFrameWrapper({ children }: PhoneFrameWrapperProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-900">
      <div className="relative w-[375px] h-[812px] flex items-center justify-center">
        <img
          src="/phone-frame.png"
          alt="Phone Frame"
          className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
          draggable={false}
        />
        <div className="absolute top-[47px] left-[0px] w-[375px] h-[718px] z-20 overflow-hidden rounded-[40px]">
          {children}
        </div>
      </div>
    </div>
  )
} 