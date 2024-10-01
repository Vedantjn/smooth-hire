import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">EasyApply</Link>
        <div>
          <Link href="/apply" className="mr-4 hover:text-gray-300">Apply</Link>
          <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}