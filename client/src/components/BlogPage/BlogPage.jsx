import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../../data/blogs';
import remarkGfm from 'remark-gfm'; 
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { useEffect } from 'react';

export default function BlogPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (blog) {
      // API call to increment views
      axios.put(process.env.REACT_APP_SERVER_URL+`/api/views/${blog.id}`)
        .then((response) => {
          console.log("View count incremented:", response.data);
        })
        .catch((error) => {
          console.error("Error incrementing view count:", error);
        });
    }
  }, [blog]); 
  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Blog not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Go back</Link>
      </div>
    );
  }

  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
    
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span> • <span>{blog.date}</span>
      </div>
      <div className="mt-6">
       
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      <Link to="/blogs" className="text-blue-600 hover:underline mt-8 block">← Back to Blogs</Link>
    </div>
  );
}
