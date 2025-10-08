"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import axios from "axios";
import CalendarMonthDropdown from "../calendar-month-dropdown/CalendarMonthDropdown";
import { CalendarEvent } from "@/utils/types";
import Link from "next/link";
import EventDetail from "../event-details/EventDetails";

export default function EventCalendarSection(): React.ReactElement | null {
  // Memoized array of month names with year
  const months = useMemo(() => {
    // Create an array of 12 months starting from current month
    return Array.from({ length: 12 }, (_, i) => {
      // Create a new Date object with the current month and year
      const date = new Date();
      // Get current month and add index to get future months
      const currentMonth = date.getMonth();
      date.setMonth(currentMonth + i);
      // Return the month name and year
      return (
        date.toLocaleString("en-US", { month: "long" }) +
        " " +
        date.getFullYear()
      );
    });
  }, []); // Empty dependency array since this calculation only depends on the current year and month

  // State for the selected month initially set to the current month
  const [selectedMonth, setSelectedMonth] = useState<string>(months[0]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  // State for the calendar events
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const formattedSelectedMonth = useMemo(() => {
    // Split the selected month into month name and year
    const [monthName, year] = selectedMonth.split(" ");

    // Get month number (0-11) from month name
    const monthIndex = new Date(`${monthName} 1, 2000`).getMonth();

    // Format as YYYY-MM (adding 1 to monthIndex since it's 0-based, and padding with leading zero if needed)
    return `${year}-${(monthIndex + 1).toString().padStart(2, "0")}`;
  }, [selectedMonth]);

  // Fetch calendar events from the API
  useEffect(() => {
    (async () => {
      // Initiate a fetch request to the API endpoint
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/event/get_calendar_events?month=${formattedSelectedMonth}`
        )
        .then((response) => {
          // Log the response data
          console.log(response.data);
          // Update the podcast episodes state with the fetched data
          setCalendarEvents(response.data);
        })
        .catch((error) => {
          // Log the error
          console.error(error);
        });
    })();
  }, [formattedSelectedMonth]); // Empty array as dependency to only fetch once

  // Get number of days in selected month
  const daysInMonth = useMemo(() => {
    // Split the selected month into month and year
    const [month, year] = selectedMonth.split(" ");
    // Create a new Date object with the current month and year
    return new Date(
      parseInt(year),
      new Date(`${month} 1, ${year}`).getMonth() + 1,
      0
    ).getDate();
  }, [selectedMonth]);

  // Get the first day of the month
  const firstDay = new Date(`${selectedMonth}-01`).getDay();

  return (
    // Main container
    <div className="flex flex-col items-center gap-15 py-20" id="calendar">
      {/* Header wrapper */}
      <div className="w-fit sm:w-[1225px] flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-5 sm:gap-0">
        {/* Title wrapper */}
        <div className="relative w-fit">
          {/* Title */}
          <p className="text-[40px] font-semibold text-heading tracking-wide">
            Events Calendar
          </p>
          {/* Brush stroke */}
          <Image
            src={"/images/brush-stroke.png"}
            alt="brush-stroke"
            className="absolute -bottom-2.5 right-0 object-contain"
            height={5}
            width={250}
          />
        </div>
        {/* Calendar month dropdown */}
        <CalendarMonthDropdown
          months={months}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-1 sm:grid-cols-7">
        {/* Empty days */}
        {Array.from({ length: firstDay }, (_, index) => (
          <div className="hidden sm:flex" key={`empty-${index}`} />
        ))}
        {/* Calendar days */}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const event = calendarEvents.find(
            (event) => new Date(event.date).getDate() === day
          );
          return (
            <div
              key={index}
              className={`relative group size-[175px] border border-[#e6e6e6] p-3 cursor-pointer transition-all ${
                event ? "bg-[#FFEBCC] hover:bg-[#FFD799]" : "bg-white"
              }`}
            >
              {/* Date number */}
              <p className="text-2xl">{day}</p>

              {/* Event info */}
              {event && (
                <>
                  <p className="text-[10px] text-[#666666]">{event.time}</p>
                  <p className="text-[10px] text-[#666666] font-semibold truncate">
                    {event.title}
                  </p>

                  {/* Hover tooltip */}
                  <div
                    className="absolute hidden group-hover:flex flex-col left-1/2 -translate-x-1/2 top-full mt-2 w-72 p-5 gap-2.5
                       rounded-[15px] border-r border-b border-[#666]/20 
                       bg-black/10 shadow-[0_4px_17px_0_rgba(0,0,0,0.13)] 
                       backdrop-blur-[15px] transition-all duration-200 z-50 "
                  >
                    <div className="flex justify-between items-center">
                      <p className="uppercase text-sm font-semibold text-description">
                        Podcast
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g>
                          <path
                            d="M5.8279 10.1719C5.73414 10.0782 5.60699 10.0255 5.4744 10.0255C5.34182 10.0255 5.21467 10.0782 5.1209 10.1719L1.0249 14.2679V11.4999C1.0249 11.3673 0.972224 11.2401 0.878456 11.1463C0.784688 11.0526 0.657511 10.9999 0.524902 10.9999C0.392294 10.9999 0.265117 11.0526 0.171349 11.1463C0.0775808 11.2401 0.0249023 11.3673 0.0249023 11.4999V15.4749C0.0249023 15.6075 0.0775808 15.7347 0.171349 15.8285C0.265117 15.9222 0.392294 15.9749 0.524902 15.9749H4.4999C4.63251 15.9749 4.75969 15.9222 4.85346 15.8285C4.94722 15.7347 4.9999 15.6075 4.9999 15.4749C4.9999 15.3423 4.94722 15.2151 4.85346 15.1214C4.75969 15.0276 4.63251 14.9749 4.4999 14.9749H1.7319L5.8279 10.8789C5.92164 10.7851 5.9743 10.658 5.9743 10.5254C5.9743 10.3928 5.92164 10.2657 5.8279 10.1719ZM10.1719 5.8279C10.2657 5.92164 10.3928 5.9743 10.5254 5.9743C10.658 5.9743 10.7851 5.92164 10.8789 5.8279L14.9749 1.7319V4.4999C14.9749 4.63251 15.0276 4.75969 15.1214 4.85346C15.2151 4.94722 15.3423 4.9999 15.4749 4.9999C15.6075 4.9999 15.7347 4.94722 15.8285 4.85346C15.9222 4.75969 15.9749 4.63251 15.9749 4.4999V0.524902C15.9749 0.392294 15.9222 0.265117 15.8285 0.171349C15.7347 0.0775808 15.6075 0.0249023 15.4749 0.0249023H11.4999C11.3673 0.0249023 11.2401 0.0775808 11.1463 0.171349C11.0526 0.265117 10.9999 0.392294 10.9999 0.524902C10.9999 0.657511 11.0526 0.784688 11.1463 0.878456C11.2401 0.972224 11.3673 1.0249 11.4999 1.0249H14.2679L10.1719 5.1209C10.0782 5.21467 10.0255 5.34182 10.0255 5.4744C10.0255 5.60699 10.0782 5.73414 10.1719 5.8279Z"
                            fill="#737373"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_318_4908">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="text-base font-semibold text-heading uppercase">
                      {event.title}
                    </p>

                    <p className="text-xs uppercase text-description">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                    <div className="flex justify-between items-center">
                      <button className="text-sm font-medium text-heading cursor-pointer">
                        Add to Calendar
                      </button>
                      <button
                        className="text-xs font-medium text-[#5896BC] cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <EventDetail
              eventId={selectedEvent!.id}
              onClose={() => setSelectedEvent(null)}
            />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center bg-[#5896BC] rounded-full py-2.5 px-5 w-2xs ">
        <Link
          href={"/event-creation"}
          className="text-lg font-medium text-[#FFF] cursor-pointer"
        >
          Publish Your Event
        </Link>
      </div>
    </div>
  );
}
