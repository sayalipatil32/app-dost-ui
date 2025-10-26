'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import { blogContentData } from '@/data/BlogPage/blogContentData';

// Placeholder for image component or use next/image if configured
const ImagePlaceholder = ({ src, alt, className }) => (
  <div className={`${className} bg-linear-to-r from-slate-200 to-slate-300 relative overflow-hidden`} aria-label={alt}>
      {/* You can add a placeholder icon or text here */}
  </div>
);


export default function BlogContent() {
  const { categories, blogPosts, loadMoreButtonText } = blogContentData;
  // TODO: Add state and filtering logic for categories if needed

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              // TODO: Add onClick handler for filtering
              className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Post Image */}
               <div className="h-48 relative overflow-hidden">
                   {/* Using the ImagePlaceholder component */}
                  <ImagePlaceholder src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-white bg-black/30 px-2 py-1 rounded-full"> {/* Improved visibility */}
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{post.readTime}</span>
                  </div>
                </div>

              <div className="p-6">
                {/* Post Meta */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {/* TODO: Wrap with Link to actual post */}
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                {/* TODO: Wrap with Link to actual post */}
                <Button variant="outline" className="w-full rounded-xl border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 font-semibold group-hover:scale-105 transition-all duration-300">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          {/* TODO: Add onClick handler for loading more */}
          <Button className="rounded-xl px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
            {loadMoreButtonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}