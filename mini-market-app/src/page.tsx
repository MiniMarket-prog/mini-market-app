import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mini Market Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/sales" className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200">
          <h2 className="text-xl font-semibold">Sales</h2>
          <p>Track and manage sales</p>
        </Link>
        <Link href="/products" className="p-6 bg-green-100 rounded-lg hover:bg-green-200">
          <h2 className="text-xl font-semibold">Products</h2>
          <p>Manage inventory</p>
        </Link>
        <Link href="/alerts" className="p-6 bg-yellow-100 rounded-lg hover:bg-yellow-200">
          <h2 className="text-xl font-semibold">Alerts</h2>
          <p>View important notifications</p>
        </Link>
        <Link href="/store" className="p-6 bg-purple-100 rounded-lg hover:bg-purple-200">
          <h2 className="text-xl font-semibold">Store Info</h2>
          <p>Manage store details</p>
        </Link>
      </div>
    </div>
  )
}