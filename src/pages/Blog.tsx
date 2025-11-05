import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

function Blog() {
  return (
    <section className="bg-primaryBg mt-20 flex justify-center px-6 py-10">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-4xl">
            Blog
          </h1>
          <p className="text-bodyTextColor mx-auto max-w-md">
            Insights, tutorials, and thoughts on web development, design, and
            modern coding practices.
          </p>
        </div>

        {/* Blog Posts - Vertical Layout */}
        <div className="flex w-full flex-col space-y-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-secondaryBg flex flex-col items-center overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Large Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[400px] w-full object-cover"
              />

              {/* Blog Info */}
              <div className="flex flex-col items-center space-y-4 px-6 py-8 text-center">
                <p className="text-sm text-gray-400">{post.date}</p>

                <h2 className="text-headingTextColor text-2xl font-semibold md:text-3xl">
                  {post.title}
                </h2>

                <p className="text-bodyTextColor max-w-2xl text-base leading-relaxed">
                  {post.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full object-cover shadow-sm"
                  />
                  <div className="text-left">
                    <p className="text-headingTextColor text-sm font-medium">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-400">{post.author.role}</p>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="border-primaryHoverBg text-primaryHoverBg hover:bg-primaryHoverBg mt-4 inline-block rounded-md border px-5 py-2 font-medium transition-colors hover:text-white"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
