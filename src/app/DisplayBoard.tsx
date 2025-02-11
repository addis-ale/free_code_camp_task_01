"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useGetQuoteQuery } from "@/state/posts/postsApiSlice";

const DisplayBoard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0); // To trigger a refresh
  const {
    data: quoteData,
    isLoading,
    error,
  } = useGetQuoteQuery(refreshTrigger);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg w-full sm:w-[500px] px-6 flex items-center justify-center border rounded-2xl bg-gradient-to-br from-blue-100 via-purple-200 to-pink-300 shadow-xl dark:from-gray-800 dark:to-gray-900"
    >
      <div className="relative w-full h-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="flex-1 flex justify-center items-center px-6 sm:px-16 py-6 sm:py-8">
          <div className="flex flex-col w-full h-auto gap-5">
            {/* Quote Section */}
            <div className="flex gap-4 items-start flex-1">
              {isLoading ? (
                <span className="text-lg text-gray-600 dark:text-gray-300">
                  Loading...
                </span>
              ) : error ? (
                <span className="text-lg text-red-500">
                  Failed to fetch quote.
                </span>
              ) : (
                <>
                  <Quote
                    size={96}
                    className="text-indigo-600 sm:text-2xl md:text-4xl lg:text-6xl"
                  />

                  <h2 className="font-semibold text-xl sm:text-2xl leading-snug text-gray-900 dark:text-white italic text-center">
                    {/* Display quote with no fixed height */}
                    {quoteData?.[0]?.quote || "No quote available"}
                  </h2>
                </>
              )}
            </div>
            {/* Author Section */}
            <div className="flex justify-end mt-4">
              <p className="text-lg text-blue-700 sm:text-xl dark:text-blue-400">
                - <i>{quoteData?.[0]?.author || "Unknown"}</i>
              </p>
            </div>

            {/* Refresh Button Section */}
            <div className="flex justify-center items-center w-full mt-6">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setRefreshTrigger((prev) => prev + 1)} // Increment refreshCount
                className="flex items-center justify-center bg-sky-500 p-3 rounded-lg shadow-lg hover:bg-sky-600 transition-all text-white"
              >
                <span className="mr-2">New Quote</span>
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DisplayBoard;
