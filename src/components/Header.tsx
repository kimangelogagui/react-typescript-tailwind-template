import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaBars,
  FaXmark,
} from 'react-icons/fa6';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = 'hover:text-headingTextColor transition-colors duration-200';
  const activeLink =
    'text-secondaryHoverBG font-semibold border-b-2 border-secondaryHoverBg pb-1';

  return (
    <header className="bg-secondaryBg text-headingTextColor sticky top-0 z-50 shadow-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-7">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="absolute left-6 flex items-center gap-2 transition-opacity hover:opacity-90"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <nav className="text-bodyTextColor hidden gap-8 text-lg md:flex">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLink}` : linkClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLink}` : linkClass
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLink}` : linkClass
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLink}` : linkClass
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeLink}` : linkClass
            }
          >
            Projects
          </NavLink>
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="absolute right-6 hidden gap-8 text-2xl text-gray-50 md:flex">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-400"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-bodyTextColor absolute right-6 text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="bg-secondaryBg animate-fadeIn absolute left-0 flex w-full flex-col items-center space-y-4 border-t border-gray-700 py-6 md:hidden"
          style={{ top: '100%' }}
        >
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `text-bodyTextColor ${activeLink}`
                : 'text-bodyTextColor hover:text-secondaryHoverBg text-lg transition-colors'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `text-bodyTextColor ${activeLink}`
                : 'text-bodyTextColor hover:text-secondaryHoverBg text-lg transition-colors'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `text-bodyTextColor ${activeLink}`
                : 'text-bodyTextColor hover:text-secondaryHoverBg text-lg transition-colors'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `text-bodyTextColor ${activeLink}`
                : 'text-bodyTextColor hover:text-secondaryHoverBg text-lg transition-colors'
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `text-bodyTextColor ${activeLink}`
                : 'text-bodyTextColor hover:text-secondaryHoverBg text-lg transition-colors'
            }
          >
            About
          </NavLink>

          {/* Social Icons Row */}
          <div className="mt-4 flex gap-6 text-2xl text-gray-50">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gray-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
