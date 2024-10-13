import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SmoothHire
          </Link>
          <div className="">
            <Link href="/dashboard" className="hover:underline text-lg mx-2">
              Dashboard
            </Link>
            <Link href="/CompanyLogIn" className="hover:underline text-lg mx-2">
              Company LogIn/Register
            </Link>
          </div>
        </nav>
      </header>
  )
}