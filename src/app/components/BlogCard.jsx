import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ imgUrl, title, previewUrl }) => {
  return (
    <div className="relative" >
      <div className="h-54 md:h-72 rounded-t-xl  relative group"              >
        <div className="hidden md:block">
          <Image src={imgUrl} alt={title} fill className="rounded-t-xl " />
        </div>
        <div className="md:hidden">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2" href={previewUrl}>{title}</h5>
      </div>
    </div>
  );
};

export default BlogCard;
