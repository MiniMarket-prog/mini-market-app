import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Mini Market Management</h1>
      <p className="text-xl">Manage your mini market efficiently with our easy-to-use tools.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/products" className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>Manage your inventory and product catalog</p>
        </Link>
        <Link href="/sales" className="p-6 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Sales</h2>
          <p>Record and track your daily sales</p>
        </Link>
        <Link href="/reports" className="p-6 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p>View sales and inventory reports</p>
        </Link>
        <Link href="/settings" className="p-6 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>Configure your store settings</p>
        </Link>
      </div>
    </div>
  )
}

