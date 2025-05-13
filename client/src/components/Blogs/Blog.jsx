import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState([]); // All blog data (fetched from backend)
  const [viewCounts, setViewCounts] = useState([]); // View counts
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsAndViews = async () => {
      try {
        const [blogsRes, viewsRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_SERVER_URL}/api/blogs`),
          axios.get(`${process.env.REACT_APP_SERVER_URL}/api/views`)
        ]);

        const blogsData = blogsRes.data;
        const viewsData = viewsRes.data;

        // Merge blogs with views
        const mergedBlogs = blogsData.map((blog) => {
          const view = viewsData.find((v) => v.blogId === blog.id);
          return {
            ...blog,
            views: view ? view.views : 0
          };
        });

        setBlogs(mergedBlogs);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blogs or views');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsAndViews();
  }, []);

  if (loading) return <div className="text-center py-10">Loading blogs...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

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
              <span>By {blog.author}</span> •{" "}
              <span>{new Date(blog.date).toLocaleDateString()}</span> •{" "}
              <span>{blog.views} Views</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
