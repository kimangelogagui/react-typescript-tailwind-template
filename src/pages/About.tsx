function About() {
  return (
    <section className="bg-primaryBg justify-center px-6">
      <h1 className="text-headingTextColor text-3xl text-center mb-10 font-semibold md:text-5xl">
        About Me
      </h1>
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
        {/* Image Section */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src="/images/about/1.jpg"
            alt="About Illustration"
            className="w-48 rounded-2xl drop-shadow-lg md:w-full"
          />
        </div>

        {/* Text Section */}
        <div className="flex w-full flex-col items-center space-y-4 text-center md:w-1/2 md:items-start md:text-left">
          <p className="text-bodyTextColor max-w-md leading-relaxed">
            Hello! I’m Your Name, a passionate web developer dedicated to
            building modern, responsive, and visually engaging websites. My goal
            is to craft seamless digital experiences that blend creativity with
            functionality.
          </p>
          <p className="text-bodyTextColor max-w-md leading-relaxed">
            With a focus on clean code and user-centered design, I enjoy turning
            complex problems into elegant solutions — bringing ideas to life
            through technology and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
