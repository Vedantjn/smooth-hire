import CompanyLoginForm from "@/components/CompanyLoginForm"
import Link from "next/link"

function page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link href="/" className="text-3xl font-bold">SmoothHire</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">Apply for Job</h2>
            <CompanyLoginForm />
          </div>
        </div>
      </main>

      <footer className="bg-white py-5 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="container mx-auto text-center text-black">
          <p>© 2024 SmoothHire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default page
