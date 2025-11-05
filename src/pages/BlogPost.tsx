import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="bg-primaryBg mt-20 flex justify-center px-6 py-20 text-center">
        <div className="text-headingTextColor space-y-4">
          <h1 className="text-3xl font-semibold">Post Not Found</h1>
          <Link
            to="/blog"
            className="text-primaryHoverBg font-medium hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-primaryBg mt-20 flex justify-center px-6 py-10">
      <div className="flex w-full max-w-3xl flex-col items-center space-y-10">
        {/* Large Image */}
        <img
          src={post.image}
          alt={post.title}
          className="max-h-[450px] w-full rounded-xl object-cover shadow-lg"
        />

        {/* Blog Title */}
        <div className="space-y-4 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm text-gray-400">{post.date}</p>
        </div>

        {/* Blog Body */}
        <div className="text-bodyTextColor space-y-6 text-justify text-lg leading-relaxed md:text-left">
          <p>{post.content}</p>
        </div>

        {/* Author */}
        <div className="flex flex-col items-center space-y-2 border-t border-gray-700 pt-8 text-center">
          <img
            src="/author.png"
            alt="Author Avatar"
            className="h-14 w-14 rounded-full object-cover shadow-md"
          />
          <p className="text-headingTextColor font-semibold">Kim Angelo</p>
          <p className="text-bodyTextColor text-sm">Web Developer & Designer</p>
        </div>

        {/* Back to Blog */}
        <Link
          to="/blog"
          className="text-primaryHoverBg mt-8 font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
}

export default BlogPost;
