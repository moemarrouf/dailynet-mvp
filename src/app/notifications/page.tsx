import BottomNavigation from '@/components/BottomNavigation'

export default function Notifications() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-4 pb-20">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        {/* Add notifications content here */}
      </div>
      <BottomNavigation />
    </div>
  )
} 