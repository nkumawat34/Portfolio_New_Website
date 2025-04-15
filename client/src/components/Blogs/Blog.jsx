import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../data/blogs';

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blogpage/${blog.id}`}
            key={blog.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition block"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.summary}</p>
            <div className="text-sm text-gray-500">
              <span>By {blog.author}</span> • <span>{blog.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
