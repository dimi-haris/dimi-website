"use client";
import Image from "next/image";
import React from "react";

export default function ApprovalCard({ onClose }: { onClose?: () => void }): React.ReactElement | null {
  return (
    <div className="fixed  left-1/2 top-1/4 -translate-x-1/2 shadow-lg bg-white p-10 rounded-xl text-center flex flex-col gap-6 w-[90%] max-w-[500px] z-50">
      <div className="inline-flex items-center justify-center gap-5 p-3 bg-[#d8ffe2] rounded-xl mx-auto">
        <Image
          className="w-10 h-10 animate-spin"
          src="/images/loading-svg.svg"
          alt="Hourglass Icon"
          width={10}
          height={10}
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">
        Thanks! Your Event is Under Review
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Our team is reviewing your event to ensure it aligns with our community
        guidelines. We’ll notify you once it’s approved and published.
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          Edit Event Details
        </button>
        <button className="px-6 py-2 rounded-md bg-[#E5AB4E] text-white hover:bg-[#d1973e] transition"
        onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
