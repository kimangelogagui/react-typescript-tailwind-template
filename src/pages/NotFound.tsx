function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-6 text-center">
      <h1 className="text-secondaryHoverBg text-6xl font-bold">404</h1>
      <h2 className="text-headingTextColor text-2xl font-semibold">
        Page Not Found
      </h2>
      <p className="text-bodyTextColor max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-secondaryHoverBg mt-4 inline-block rounded-lg px-6 py-3 font-medium text-white transition-transform hover:scale-105"
      >
        Back to Home
      </a>
    </section>
  );
}

export default NotFound;
