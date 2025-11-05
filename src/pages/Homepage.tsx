function Homepage() {
  return (
    <section className="bg-primaryBg mt-20 justify-center px-6 py-10">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
        {/* Image Section */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src="/profile.png"
            alt="Business Illustration"
            className="w-48 drop-shadow-lg md:w-72"
          />
        </div>

        {/* Text Section */}
        <div className="flex w-full flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-4xl">
            YOUR BUSINESS
          </h1>
          <p className="text-bodyTextColor max-w-md">
            Welcome to your business homepage! This is your space to introduce
            who you are, what you do, and why visitors should explore more about
            you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
