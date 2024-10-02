import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">SmoothHire</Link>
          <Link href="/dashboard" className="hover:underline text-lg">Dashboard</Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white text-black flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome to SmoothHire</h1>
          <p className="text-xl mb-10 text-gray-700">Simplify your job application process with our easy-to-use platform.</p>
          <Link href="/apply" className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
            Start Applying
          </Link>
        </div>
      </main>

      <footer className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p>© 2024 SmoothHire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}