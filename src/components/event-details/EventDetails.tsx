"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { Mail, Youtube, Instagram, Twitter } from 'lucide-react';

interface EventDetailProps {
  eventId: number;
  onClose: () => void;
}
interface EventData {
  id: string;
  fullName: string;
  email: string;
  eventName: string;
  eventType: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  imageFilename: string;
  eventUrl: string;
  stageName: string;
  phoneNumber: string;
  socialMedia: string;
  handle: string;
  otherUrl: string;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function EventDetail({ eventId, onClose }: EventDetailProps) {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(eventData, "eventDataeventData");

  const handleDiscoverEvent = (): void => {
    if (eventData?.eventUrl) {
      window.open(eventData.eventUrl, "_blank");
    }
  };

  const handleSocialClick = (): void => {
    if (!eventData?.socialMedia || !eventData?.handle) return;

    let url = "";
    switch (eventData.socialMedia.toLowerCase()) {
      case "twitter":
        url = `https://twitter.com/${eventData.handle}`;
        break;
      case "instagram":
        url = `https://instagram.com/${eventData.handle}`;
        break;
      case "youtube":
        url = `https://youtube.com/@${eventData.handle}`;
        break;
      default:
        url = eventData.otherUrl || "";
        break;
    }
    if (url) window.open(url, "_blank");
  };
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        // 🔹 Replace with your real API endpoint
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/event/${eventId}`
        );

        setEventData(res.data);
      } catch (err) {
        setError("Failed to fetch event details.");
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetails();
    }
  }, [eventId]);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p>Loading event details...</p>
      </div>
    );

  if (error || !eventData)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-600">
        {error || "No event data found"}
      </div>
    );
  return (
    <div className="min-h-screen  p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg overflow-hidden px-10 py-[30px]">
        {/* Hero Image Section */}
        <div className="relative h-60 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-2">
          <img
            src={
              eventData.imageFilename
                ? `https://api.godimi.com/uploads/event_images/${eventData.imageFilename}`
                : "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80"
            }
            alt={eventData.eventName}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Artist Name Overlay */}
          <div className="absolute bottom-6 left-8">
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
              {eventData.stageName}
            </h1>
          </div>
          {/* Stage Lights Effect */}
          <div className="absolute top-0 right-20 w-32 h-32 bg-yellow-300/30 blur-3xl rounded-full" />
        </div>

        {/* Content Section */}
        <div className="">
          {/* Concert Label */}
          <div className="mb-3">
            <span className="text-[#E5AB4E] text-base font-semibold tracking-wide uppercase">
              {eventData.eventType}
            </span>
          </div>

          {/* Event Title */}
          <h2 className="text-base font-medium text-heading mb-6">
            {eventData.eventName}
          </h2>
          <div className="flex justify-between items-center">
            {/* Location and Date Info */}
            <div className="space-y-3 mb-8">
              <p className="text-heading font-medium">
                {eventData.location.replace("-", ", ")}
              </p>
              <div className="flex items-center gap-2 md:gap-4 text-description text-sm flex-wrap">
                <span>
                  {new Date(eventData.eventDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {/* <span>-</span> */}
                {/* <span>{endDate}</span> */}
                <span>|</span>
                {eventData.startTime} - {eventData.endTime}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-description text-sm font-medium">
                Social Links:
              </span>
              <div className="flex gap-3">
                <button
                  onClick={handleSocialClick}
                  className="hover:opacity-80 transition-opacity"
                  aria-label={eventData.socialMedia}
                >
                  {eventData.socialMedia === "twitter" && (
                    <Image
                      src="/icons/twitter.png"
                      alt="Twitter"
                      className="object-contain"
                      height={25}
                      width={25}
                    />
                  )}
                  {eventData.socialMedia === "instagram" && (
                    <Image
                      src="/icons/instagram.png"
                      alt="Instagram"
                      className="object-contain"
                      height={25}
                      width={25}
                    />
                  )}
                  {eventData.socialMedia === "youtube" && (
                    <Image
                      src="/icons/youtube-dark.png"
                      alt="YouTube"
                      className="object-contain"
                      height={25}
                      width={25}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3.5 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDiscoverEvent}
              className="flex-1 px-6 py-3.5 bg-[#5896BC] text-white rounded-full font-semibold transition-colors shadow-md cursor-pointer"
            >
              Discover Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
