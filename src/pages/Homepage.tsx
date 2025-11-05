import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <section className="bg-primaryBg flex flex-col items-center px-6 shadow-2xl">
      <div className="flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-8">
        {/* Left: Profile Image */}
        <div className="flex w-full justify-center sm:ml-6 md:w-1/2 md:justify-start">
          <img
            src="/profile.png"
            alt="Profile Picture"
            className="w-48 rounded-3xl border-4 border-blue-500/30 drop-shadow-2xl md:w-72"
          />
        </div>

        {/* Right: Headline, Subheadline */}
        <div className="flex w-full flex-col space-y-4 text-center sm:-ml-20 md:w-1/2 md:text-right">
          <h1 className="text-headingTextColor text-4xl font-extrabold md:text-6xl">
            YOUR BUSINESS
          </h1>

          <p className="text-bodyTextColor ml-auto text-base leading-relaxed md:text-xl">
            Welcome to your business homepage! This is your space to introduce
            who you are, what you do, and why visitors should explore more about
            you.
          </p>
        </div>
      </div>

      {/* CTA Button (Centered Below) */}
      <div className="mt-24 flex justify-center pb-24">
        <NavLink
          to="/contact"
          className="bg-specialTextColor hover:bg-specialTextColor/80 text-center text-primaryBg inline-block rounded-full px-10 sm:px-12 py-4 text-2xl sm:text-4xl font-semibold transition"
        >
          Get in Touch
        </NavLink>
      </div>
    </section>
  );
}

export default Homepage;
