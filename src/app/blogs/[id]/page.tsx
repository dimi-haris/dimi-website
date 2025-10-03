"use client";

import { use, useState, useEffect } from "react";
import axios from "axios";
import SuggestedBlogsSection from "@/components/suggested-blogs-section/SuggestedBlogsSection";
import { BlogItem } from "@/utils/types";
import coverImage from "../../../../public/images/blog-cover2.png";
import Image from "next/image";
export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}): React.ReactElement | null {
  // Destructure the id from the params
  const { id } = use(params);

  // State for the blog data
  const [blog, setBlog] = useState<BlogItem | null>(null);

  useEffect(() => {
    (async () => {
      // Initiate a fetch request to the API endpoint
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`)
        .then((response) => {
          // Log the response data
          console.log(response.data);
          // Update the blog state with the fetched data
          setBlog(response.data);
        })
        .catch((error) => {
          // Log the error
          console.error(error);
        });
    })();
  }, [id]);

  return (
    // Main container
    <div className="min-h-screen w-screen flex flex-col items-center pt-5 sm:pt-40">
      {/* Blog HTML fragment */}
      <Image src={coverImage} alt="Hero Image" className="hero-img pb-8" />
      {blog?.blogHtml && (
        <div
          className="px-[70px] html-content  max-w-none leading-[1.5]"
          dangerouslySetInnerHTML={{ __html: blog?.blogHtml }}
        />
      )}
      {/* Suggested blogs section */}
      <SuggestedBlogsSection />
    </div>
  );
}
