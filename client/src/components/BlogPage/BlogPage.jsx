import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the blog from the server using the id
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        // Increment views
        return axios.put(`${process.env.REACT_APP_SERVER_URL}/api/blogs/views/${id}`);
      })
      .then((response) => {
        console.log("View count incremented:", response.data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setError('Blog not found or error fetching blog.');
      });
  }, [id]);

  if (error) {
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">{error}</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Go back</Link>
      </div>
    );
  }

  if (!blog) {
    return <div className="text-center py-20 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span> • <span>{new Date(blog.date).toLocaleDateString()}</span>
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
