export default function DownloadButton() {
  return (
    <a
      href="/cv.pdf"
      download
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Download CV
    </a>
  )
}
