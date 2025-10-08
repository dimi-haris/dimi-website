"use client";

import { useRef, useState, useEffect } from "react";
// import { toast } from "react-toastify";

interface ImageDropboxProps {
  value?: string | File | null;
  onChange?: (data: { name: string; value: File | null }) => void;
  name: string;
  label: string;
  showBtn?: boolean;
}

const ImageDropbox: React.FC<ImageDropboxProps> = ({
  value,
  onChange,
  name,
  label,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFile = (file: File) => {
    const isMediaPhoto = name === "mediaphoto";
    const validTypes = isMediaPhoto
      ? ["image/jpeg", "image/png", "video/mp4", "video/quicktime", "audio/mpeg"]
      : ["image/jpeg", "image/png", "audio/mpeg"];

    const invalidExtensions = [".jfif"];
    const maxSizeInBytes = 20 * 1024 * 1024; // 20MB
    const maxImageSizeInBytes = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      // toast.error(
      //   isMediaPhoto
      //     ? "Only JPG, PNG, MP4, MOV, and MP3 files are allowed."
      //     : "Only JPG and PNG files are allowed."
      // );
      return;
    }

    const fileExt = file.name.split(".").pop()?.toLowerCase();
    if (fileExt && invalidExtensions.includes("." + fileExt)) {
      // toast.error("JFIF format is not allowed.");
      return;
    }

    if (file.type.startsWith("image/") && file.size > maxImageSizeInBytes) {
      // toast.error("Image size must be less than 5MB.");
      return;
    }

    if (file.type.startsWith("audio/") && file.size > maxImageSizeInBytes) {
      // toast.error("Audio size must be less than 5MB.");
      return;
    }

    if (file.type.startsWith("video/") && file.size > maxSizeInBytes) {
      // toast.error("Video size must be less than 20MB.");
      return;
    }

    setUploadedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    onChange && onChange({ name, value: file });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  useEffect(() => {
    if (!value) {
      setUploadedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else if (typeof value === "string") {
      setUploadedFile(null);
      setPreviewUrl(value);
    } else if (value instanceof File) {
      setUploadedFile(value);
      setPreviewUrl(URL.createObjectURL(value));
    }
  }, [value]);

  return (
    <>
     
      <div
        className={`flex flex-col border border-dotted border-[#D5D7DA] rounded-lg px-4 py-7 justify-center items-center gap-2 `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {/* Icon */}
        <div className="bg-[#F6F6F6] rounded-lg flex items-center p-1 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M21.847 12.9306C21.8563 12.9305 21.8656 12.9305 21.875 12.9305C24.9816 12.9305 27.5 15.4535 27.5 18.5659C27.5 21.4665 25.3125 23.8552 22.5 24.1667M21.847 12.9306C21.8655 12.7243 21.875 12.5154 21.875 12.3044C21.875 8.50044 18.797 5.41675 15 5.41675C11.404 5.41675 8.45291 8.18259 8.15053 11.7066M21.847 12.9306C21.7191 14.3512 21.1607 15.6475 20.3035 16.6874M8.15053 11.7066C4.97998 12.0089 2.5 14.6841 2.5 17.9396C2.5 20.9689 4.6472 23.4957 7.5 24.0759M8.15053 11.7066C8.34783 11.6878 8.54779 11.6782 8.75 11.6782C10.1573 11.6782 11.4559 12.1442 12.5006 12.9305"
              stroke="#737373"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 17.9167V27.9167M15 17.9167C14.1247 17.9167 12.4894 20.4096 11.875 21.0417M15 17.9167C15.8753 17.9167 17.5106 20.4096 18.125 21.0417"
              stroke="#737373"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="text-dark mb-2 text-center">
          <h5 className="font-semibold">Drag and drop image files to upload</h5>
          <small className="text-center">jpg, jpeg, png. Maximum 5MB</small>
        </div>

        <div className="flex justify-center w-100 ">
          <button
            type="button"
            className="btn btn-outline-dark w-50 border border-[#EAEAEA] rounded-full cursor-pointer"
            onClick={handleButtonClick}
          >
           Select Files
          </button>
        </div>

        <input
          type="file"
          accept=".jpg,.png,.mp4,.mov"
          ref={fileInputRef}
          multiple
          onChange={handleFileChange}
          hidden
        />

        {previewUrl && (
          <div className="flex flex-col items-center gap-3 mt-4 w-100">
            <div>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="rounded border shadow-sm"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
            </div>

            <div className="bg-light rounded px-3 py-2 w-100 flex justify-center items-center gap-4">
              <p className="mb-0 text-truncate">{uploadedFile?.name || "Profile Media"}</p>
              <button
                type="button"
                className="btn btn-sm btn-danger rounded-circle cursor-pointer"
                onClick={() => {
                  setUploadedFile(null);
                  setPreviewUrl(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                  onChange && onChange({ name, value: null });
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageDropbox;
