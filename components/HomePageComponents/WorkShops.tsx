
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";



interface Workshop {
  id: number;
  benefits: string[];
  kind: string;
  title: string;
  duration: string;
  image: string;
  page?: number;
  description?: string; // Optional since not in your example
}

interface ProgramsSectionProps {
  programs: Workshop[];
}

const ProgramsSection = ({ programs }: ProgramsSectionProps) => {
  const [activeTab, setActiveTab] = useState<"all" | "workshops" | "internships" | "tours" | "industry-visits">("all");

  const displayPrograms = programs.filter(p => {
    if (activeTab === "all") return true;
    if (activeTab === "workshops") return p.kind === "workshop";
    if (activeTab === "internships") return p.kind === "internship";
    if (activeTab === "tours") return p.kind === "tour";
    return p.kind === "industry-visit";
  });

  const getBadgeColor = (kind: string) => {
    switch(kind) {
      case "internship": return "bg-emerald-100 text-emerald-800";
      case "workshop": return "bg-amber-100 text-amber-800";
      case "tour": return "bg-purple-100 text-purple-800";
      case "industry-visit": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getBadgeText = (kind: string) => {
    switch(kind) {
      case "internship": return "Internship";
      case "workshop": return "Workshop";
      case "tour": return "Educational Tour";
      case "industry-visit": return "Industry Visit";
      default: return "Program";
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Experiential Learning
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Beyond Classroom <span className="text-blue-600">Learning</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Hands-on programs designed to bridge the gap between academics and industry requirements
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm overflow-scroll sm:overflow-hidden">
              {(["all", "workshops", "internships", "tours", "industry-visits"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium transition-all md:px-6 md:py-3 md:text-base ${
                    activeTab === tab
                      ? "rounded-lg bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab === "all" ? "All Programs" : 
                   tab === "workshops" ? "Workshops" :
                   tab === "internships" ? "Internships" :
                   tab === "tours" ? "Educational Tours" : "Industry Visits"}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayPrograms.map((program) => (
              <div
                key={program.id}
                className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Badge */}
                <div
                  className={`absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${getBadgeColor(program.kind)}`}
                >
                  {getBadgeText(program.kind)}
                </div>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="mb-1 text-2xl font-bold text-white">
                      {program.title}
                    </h3>
                    <p className="font-medium text-blue-200">{program.duration}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {program.description && (
                    <p className="mb-5 text-gray-600">{program.description}</p>
                  )}
                  
                  {/* Benefits Section */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-lg font-semibold text-gray-900">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <svg
                            className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col gap-4 sm:flex-row">
            <Link  href="/programs" className="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-xl">
              Explore All Programs
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <button className="flex items-center justify-center rounded-xl border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl">
              Request More Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;