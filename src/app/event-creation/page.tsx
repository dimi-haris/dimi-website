"use client";

import React, { useState, ChangeEvent, DragEvent, FC } from "react";
import axios from "axios";
import ImageDropbox from "@/components/ImageDropbox";
import ApprovalCard from "@/components/approval-card/ApprovalCard";

// --- 1. Define TypeScript Interface for Form Data ---
interface IFormData {
  fullName: string;
  stageName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  socialMedia: string;
  handle: string;
  otherUrl: string;
  eventName: string;
  eventType: string;
  image: File | null;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  eventUrl: string;
}

// --- 2. Define the Functional Component ---
const PublishEventForm: FC = () => {
  const initialFormData: IFormData = {
    fullName: "",
    stageName: "",
    email: "",
    phoneCode: "+1",
    phoneNumber: "",
    socialMedia: "",
    handle: "",
    otherUrl: "",
    eventName: "",
    eventType: "",
    image: null,
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    eventUrl: "",
  };

  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );
  const [showApprovalCard, setShowApprovalCard] = useState(false);
  // --- Handlers ---
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };
  const handleImageChange = (data: { name: string; value: File | null }) => {
    setFormData((prev) => {
      const updated = { ...prev, [data.name]: data.value };
      return updated;
    });
  };
  const handleSubmit = async (): Promise<void> => {
    setMessageType(null);

    setSubmissionMessage(null);

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email);
      payload.append("eventName", formData.eventName);
      payload.append("eventType", formData.eventType);
      payload.append("location", formData.location);
      payload.append("eventDate", formData.date);
      payload.append("startTime", formatTime(formData.startTime));
      payload.append("endTime", formatTime(formData.endTime));
      payload.append("eventUrl", formData.eventUrl);
      payload.append("stageName", formData.stageName);
      payload.append(
        "phoneNumber",
        `${formData.phoneCode}${formData.phoneNumber}`
      );
      payload.append("socialMedia", formData.socialMedia);
      payload.append("handle", formData.handle);
      payload.append("otherUrl", formData.otherUrl);

      if (formData.image) payload.append("avatar", formData.image);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/event`,
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setFormData(initialFormData);
      setShowApprovalCard(true);
      setSubmissionMessage("🎉 Event submitted successfully for review!");
      setMessageType("success");
    } catch (error: unknown) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ||
          "⚠️ Failed to submit event. Please try again."
        : "⚠️ An unexpected error occurred.";
      setSubmissionMessage(message);
      setMessageType("error");
    } finally {
      setTimeout(() => {
        setSubmissionMessage(null), setMessageType(null);
      }, 10000);
    }
  };

  // --- UI Classes ---
  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-sm transition duration-150 outline-none text-description";
  const labelClasses = "block text-sm font-medium text-description mb-2";

  // --- JSX ---
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-full sm:max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center m-8 pt-20">
          <h1 className="text-4xl sm:text-[40px] font-semibold text-heading mb-2">
            Publish Your Event
          </h1>
          <p className="text-md text-description">
            You’re one step away from sharing your event with the world.
            Finalize the details and go live
          </p>
        </div>

        {/* Submission Message */}
        {submissionMessage && (
          <div
            role="alert"
            className={`mb-6 p-4 border rounded-lg shadow-sm flex justify-between items-center transition-opacity duration-300 ${
              messageType === "success"
                ? "bg-green-100 border-green-400 text-green-700"
                : "bg-red-100 border-red-400 text-red-700"
            }`}
          >
            <span>{submissionMessage}</span>
            <button
              onClick={() => setSubmissionMessage(null)}
              className={`font-bold ml-4 ${
                messageType === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              &times;
            </button>
          </div>
        )}
        {/* Main Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="bg-white shadow-xl rounded-2xl px-auto sm:p-10 flex flex-col items-center justify-center gap-8"
        >
          <div className="max-w-full sm:max-w-4xl mx-auto">
            {/* --- Basic Info --- */}
            <section className="w-full rounded-xl p-4 sm:p-0">
              <h2 className="text-base sm:text-xl font-semibold text-heading mb-6 pb-2">
                Basic Information
              </h2>

              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={inputClasses}
                />
              </div>

              {/* Stage Name */}
              <div className="mb-6">
                <label htmlFor="stageName" className={labelClasses}>
                  Stage Name
                </label>
                <input
                  type="text"
                  id="stageName"
                  name="stageName"
                  value={formData.stageName}
                  onChange={handleChange}
                  placeholder="e.g. DJ Spark"
                  className={inputClasses}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@gmail.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className={labelClasses}>
                    Phone Number
                  </label>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="bg-white px-3 py-3 text-sm outline-none"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+92">+92</option>
                      <option value="+971">+971</option>
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="3001234567"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 text-sm outline-none text-description"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media & Handle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="socialMedia" className={labelClasses}>
                    Social Media
                  </label>
                  <select
                    id="socialMedia"
                    name="socialMedia"
                    value={formData.socialMedia}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Choose platform</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="tiktok">TikTok</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="handle" className={labelClasses}>
                    Handle (@)
                  </label>
                  <input
                    type="text"
                    id="handle"
                    name="handle"
                    value={formData.handle}
                    onChange={handleChange}
                    placeholder="@handle"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Other URL */}
              <div className="mb-6">
                <label htmlFor="otherUrl" className={labelClasses}>
                  Other Website URL
                </label>
                <input
                  type="url"
                  id="otherUrl"
                  name="otherUrl"
                  value={formData.otherUrl}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className={inputClasses}
                />
              </div>
            </section>

            {/* --- Event Details --- */}
            <section className="w-full rounded-xl p-4 sm:p-0">
              <h2 className="text-base sm:text-xl font-semibold text-heading mb-6 pb-2">
                Event Details
              </h2>

              {/* Event Name */}
              <div className="mb-6">
                <label htmlFor="eventName" className={labelClasses}>
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  placeholder="The Annual Tech Conference"
                  className={inputClasses}
                />
              </div>

              {/* Event Type */}
              <div className="mb-6">
                <label htmlFor="eventType" className={labelClasses}>
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Choose event type</option>
                  <option value="concert">Concert</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="meetup">Meetup</option>
                  <option value="webinar">Webinar/Online</option>
                </select>
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className={labelClasses}>Image Upload</label>
                <ImageDropbox
                  name="image"
                  label="Upload Profile Image"
                  value={formData.image}
                  onChange={handleImageChange}
                />
              </div>

              {/* Location & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="location" className={labelClasses}>
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Choose Location</option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="online">Online/Virtual</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelClasses}>
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="startTime" className={labelClasses}>
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="endTime" className={labelClasses}>
                    End Time
                  </label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Event URL */}
              <div className="mb-2">
                <label htmlFor="eventUrl" className={labelClasses}>
                  Event URL
                </label>
                <input
                  type="url"
                  id="eventUrl"
                  name="eventUrl"
                  value={formData.eventUrl}
                  onChange={handleChange}
                  placeholder="https://eventbrite.com/your-event"
                  className={inputClasses}
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className="text-center p-4 sm:pt-4 w-full">
              <button
                type="submit"
                className="bg-[#E5AB4E] hover:bg-[#cf963d] transition rounded-full text-white font-semibold py-3 px-10 shadow-md w-full md:w-auto"
              >
                Submit for Review
              </button>
            </div>
          </div>
        </form>
      </div>
      {showApprovalCard && (
        <ApprovalCard onClose={() => setShowApprovalCard(false)} />
      )}
    </div>
  );
};

export default PublishEventForm;
