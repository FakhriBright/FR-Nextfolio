export default function Footer(){
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} FR-Nextfolio. All rights reserved.
      </div>
    </footer>
  )
}
