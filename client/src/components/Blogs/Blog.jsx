import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../data/blogs';

export default function Blog() {
  const [viewCounts, setViewCounts] = useState([]); // State to store view counts
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Fetch the view counts from the backend API
    const fetchViewCounts = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER_URL+'/api/views/'); // Get all views from the API
        console.log(response)
         if (!response.ok) {
          throw new Error('Failed to fetch view counts');
        }
        const data = await response.json();
        setViewCounts(data); // Set the view counts in state
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchViewCounts();
  }, []); // Empty array means this runs once on component mount

  // Show loading spinner or error message
  if (loading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Merge blog data with view counts based on blog ID
  const blogsWithViews = blogs.map(blog => {
    // Find the corresponding view count for this blog
    const view = viewCounts.find(v => v.blogId === blog.id);
    return {
      ...blog,
      views: view ? view.views : 0 // Set the view count or 0 if not found
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogsWithViews.map((blog) => (
          <Link
            to={`/blogpage/${blog.id}`}
            key={blog.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition block"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.summary}</p>
            <div className="text-sm text-gray-500">
              <span>By {blog.author}</span> • <span>{new Date(blog.date).toLocaleDateString()}</span> •
              <span> {blog.views} Views</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
