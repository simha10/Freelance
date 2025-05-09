"use client";
import { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import freelanceData from "../data/domains_types.json";
import Link from "next/link";

interface FreelanceData {
  id: number;
  name: string;
  skills: string[];
  domain: string;
  experience_years: number;
  hourly_rate_usd: number;
  location: string;
  availability: string;
  email: string;
  portfolio: string;
}

const FeaturedCards = () => {
  const [filter, setFilter] = useState<"Part-time" | "All">("Part-time");

  const filteredDomains =
    filter === "Part-time"
      ? freelanceData.freelancers.filter(
          (freelanceData: FreelanceData) =>
            freelanceData.availability === "Part-time"
        )
      : freelanceData.freelancers;

  return (
    <div className="py-6 sm:py-8 md:py-10 flex flex-col justify-center items-center px-2 sm:px-4 md:px-6 lg:px-8 w-full">
      <div className="flex flex-col justify-center items-center sm:px-4 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2 sm:p-4 text-cyan-300 text-center">
          Featured Freelancers
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center max-w-md mx-auto">
          Explore the most popular Freelance DEVS in the market
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 p-2 sm:p-4">
        {filteredDomains.map((freelanceData: FreelanceData) => (
          <div
            key={freelanceData.id}
            className="flex flex-col justify-center items-center"
          >
            <BackgroundGradient className="text-amber-50 text-center rounded-[22px] bg-black/90 shadow-lg p-4 sm:p-6 hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-[300px] lg:w-[350px] h-[450px]">
              <div className="flex flex-col flex-grow justify-between h-full">
                {/* Name */}
                <h2 className="sm:text-xl lg:text-3xl font-bold mb-2 text-cyan-300">
                  {freelanceData.name}
                </h2>

                {/* Domain */}
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  <span className="font-semibold text-xl">Domain:</span>{" "}
                  {freelanceData.domain}
                </p>

                {/* Skills */}
                <p className="text-gray-400 text-xs sm:text-sm mb-2 line-clamp-2">
                  <span className="font-semibold">Skills:</span>{" "}
                  {freelanceData.skills.join(", ")}
                </p>

                {/* Experience */}
                <p className="text-gray-400 text-xs sm:text-sm mb-2">
                  <span className="font-semibold">Experience:</span>{" "}
                  {freelanceData.experience_years} years
                </p>

                {/* Hourly Rate */}
                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                  <span className="font-semibold">Hourly Rate:</span> $
                  {freelanceData.hourly_rate_usd}/hr
                </p>

                {/* Button */}
                <Link href={`/freelancer/${freelanceData.id}`}>
                  <button className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out w-full text-sm sm:text-base">
                    View Profile
                  </button>
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      <div
        className="p-2 sm:p-4 text-center bg-amber-600 max-w-xs w-full rounded-3xl shadow-lg mt-4 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-amber-500 cursor-pointer mx-auto text-sm sm:text-base"
        onClick={() => setFilter(filter === "Part-time" ? "All" : "Part-time")}
      >
        <span>
          {filter === "Part-time" ? "View All Domains" : "View Part-time Only"}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCards;
