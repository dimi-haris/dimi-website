import Image from "next/image";
import React from "react";

interface HoverCardProps {
  member: {
    name: string;
    // role: string
    designation?: string;
    image?: string;
    description?: string;
  };
}

export default function TeamMemberDetails({ member }: HoverCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#0B0B0B85] text-white rounded-2xl p-4 backdrop-blur-md h-full  w-[90vw] sm:w-[380px] md:w-[460px] lg:w-[521px] transition-all duration-300">
      <div className="flex-shrink-0">
        <Image
          src={`${member.image}`}
          alt="team member image"
         className="w-[145.641px] h-[160px] rounded-xl object-cover"
          height={160}
          width={145.641}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-[#EFEEE0] font-normal ">
          <h3 className="text-2xl">{member.name}</h3>
          <p className="text-xs mt-2 font-kaushan">
            {member.designation}
          </p>
        </div>
        <div>
         <p className="text-xs text-[#EFEEE0] mt-2 leading-snug max-w-[320px]">
          {member.description ||
            "Roger is a Financial Advisor and Fractional CFO Services Leader with over 25 years of experience..."}
        </p>
        </div>
      </div>
    </div>
  );
}
