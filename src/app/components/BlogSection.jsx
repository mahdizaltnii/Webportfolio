"use client";
import React, { useState, useRef } from "react";
import Blogcard from "./BlogCard";
import { motion, useInView } from "framer-motion";
const BlogsData = [
  {
    id: 1,
    title: "🔥Clean Code: Essential Practices for Every Coder",
    image: "/images/projects/clean.png",
    previewUrl: "https://www.linkedin.com/posts/mahdi-zaltni_cleancode-codequality-softwaredevelopment-activity-7136045601426681857-n2z-?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Backend for Frontend (BFF) pattern",
    image: "/images/projects/bff.png",
    previewUrl: "https://www.linkedin.com/posts/mahdi-zaltni_backend-frontend-bff-activity-7133227842917535744-5d3y?utm_source=share&utm_medium=member_desktop",
  },
  
  
];

const BlogsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredBlogs = BlogsData.filter((Blog) => true);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Blogs">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12 md:mt-12">
        My Blogs
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredBlogs.map((Blog, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Blogcard
              key={Blog.id}
              title={Blog.title}
              imgUrl={Blog.image}
              previewUrl={Blog.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BlogsSection;

