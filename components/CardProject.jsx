import { ExternalLink } from "lucide-react";

export default function CardProject({ title, description, tech, image, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Thumbnail */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        {/* Title */}
        <h3 className="font-bold dark:text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex gap-2 flex-wrap mt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Lihat Project (small link) */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium mt-4 hover:underline"
        >
          Lihat Project
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
