import BottomNavigation from '@/components/BottomNavigation'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-4 pb-20">
        <h1 className="text-2xl font-bold mb-4">DailyNet</h1>
        {/* Add your main content here */}
      </div>

      <BottomNavigation />
    </div>
  )
}
