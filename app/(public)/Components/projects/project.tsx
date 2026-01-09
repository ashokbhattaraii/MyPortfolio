"use client";
import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Calendar, ArrowUpRight } from "lucide-react";

interface ProjectDetail {
  name: string;
  description: string;
  dateOfCompletion: string;
  link: string;
  startIndex: number;
  lastIndex: number;
}

const colors = [
  {
    bg: "bg-gradient-to-br from-pink-400 to-pink-600",
    icon: "bg-pink-100",
    iconText: "text-pink-600",
    accent: "group-hover:border-pink-400",
  },
  {
    bg: "bg-gradient-to-br from-blue-500 to-blue-700",
    icon: "bg-blue-100",
    iconText: "text-blue-600",
    accent: "group-hover:border-blue-400",
  },
  {
    bg: "bg-gradient-to-br from-purple-400 to-purple-600",
    icon: "bg-purple-100",
    iconText: "text-purple-600",
    accent: "group-hover:border-purple-400",
  },
  {
    bg: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    icon: "bg-cyan-100",
    iconText: "text-cyan-600",
    accent: "group-hover:border-cyan-400",
  },
  {
    bg: "bg-gradient-to-br from-orange-400 to-orange-600",
    icon: "bg-orange-100",
    iconText: "text-orange-600",
    accent: "group-hover:border-orange-400",
  },
];

export default function Project({
  project,
  startIndex,
  lastIndex,
  selectedValue,
}: any) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pageProject = project?.slice(startIndex, lastIndex);

  return (
    <>
      {pageProject.map((p: any, index: number) => {
        const firstLetter = p.name?.trim().charAt(0).toUpperCase() || "";
        const colorScheme = colors[index % colors.length];

        return (
          <Link href={p.link} key={index} target="_blank">
            <div
              className={`bg-white rounded-xl border-2 border-gray-200 ${colorScheme.accent} 
                p-6 group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-16 h-16 ${colorScheme.bg} rounded-xl flex items-center justify-center
                  shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <span className="text-3xl font-bold text-white">
                    {firstLetter}
                  </span>
                </div>

                <div
                  className={`p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-all duration-300
                  ${
                    hoveredIndex === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-blue-600 
                  transition-colors duration-300"
                >
                  {p.name}
                </h3>

                {p.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                )}

                {p.dateOfCompletion && (
                  <div className="flex items-center gap-2 pt-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500 font-medium">
                      {p.dateOfCompletion}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
