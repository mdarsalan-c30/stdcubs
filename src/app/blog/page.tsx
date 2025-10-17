'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Blog } from '../../../types/data';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), where('status', '==', 'published'));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-6 py-12 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#17254E]">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="relative h-56">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#17254E]">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.summary}</p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-500">
                    By {blog.author} on {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;