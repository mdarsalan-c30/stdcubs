import { collection, getDocs, query, where, doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Blog, Comment } from '../../../../types/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string): Promise<Blog | null> {
  const q = query(collection(db, 'blogs'), where('slug', '==', slug));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return null;
  } else {
    const blogData = {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    } as Blog;
    return blogData;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: 'Blog not found',
    };
  }

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.summary,
    alternates: {
      canonical: blog.canonicalUrl,
    },
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.summary,
      images: [
        {
          url: blog.ogImageUrl || blog.imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.summary,
      images: [blog.ogImageUrl || blog.imageUrl],
    },
  };
}

const BlogDetailPage = async ({ params }: Props) => {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  // This is a simplified implementation for the comment form.
  // In a real-world application, you would handle this with a client component and a server action.
  const handleCommentSubmit = async (formData: FormData) => {
    'use server';
    const newComment: Comment = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      comment: formData.get('comment') as string,
      createdAt: Timestamp.now(),
    };

    try {
      const blogRef = doc(db, 'blogs', blog.id);
      await updateDoc(blogRef, {
        comments: arrayUnion(newComment),
      });
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <article>
        <h1 className="text-5xl font-bold mb-4 text-[#17254E]">{blog.title}</h1>
        <div className="flex items-center mb-8 text-gray-500">
          <p>By {blog.author}</p>
          <span className="mx-2">|</span>
          <p>{new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}</p>
        </div>
        <div className="relative h-96 mb-8">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-[#17254E]">Comments</h2>
        <div className="space-y-6">
          {blog.comments && blog.comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="font-bold">{comment.name}</p>
              <p className="text-sm text-gray-500">{new Date(comment.createdAt.seconds * 1000).toLocaleString()}</p>
              <p className="mt-2">{comment.comment}</p>
            </div>
          ))}
        </div>

        <form action={handleCommentSubmit} className="mt-12">
          <h3 className="text-2xl font-bold mb-4 text-[#17254E]">Leave a Comment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
            />
          </div>
          <textarea
            name="comment"
            placeholder="Your Comment"
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0097B2]"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-[#0097B2] text-white font-bold rounded-lg hover:bg-[#007a8a] transition-colors disabled:bg-gray-400"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailPage;