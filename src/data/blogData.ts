export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  author: BlogAuthor;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Modern Web Apps with React & TypeScript',
    description:
      'Discover how combining React and TypeScript helps you create scalable, maintainable, and robust applications.',
    content: `
React and TypeScript are a perfect combo for scalable web apps.  
TypeScript adds type safety, helping developers catch errors early and write more maintainable code.

By combining React’s component-based architecture with TypeScript’s static typing, you get the best of both worlds — reusable UI components and a codebase that scales confidently.

Some of the biggest advantages include:
- Early bug detection
- Improved developer experience through IntelliSense
- Easier refactoring for large projects

Start with \`create-react-app --template typescript\` or Vite for a cleaner setup, and structure your project using clear type definitions and interfaces.`,
    date: 'October 20, 2025',
    image: '/images/blog/1.jpg',
    author: {
      name: 'Your Name',
      role: 'Web Developer & Designer',
      avatar: '/profile.png',
    },
  },
  {
    id: 2,
    title: 'Designing for Performance: TailwindCSS Tips',
    description:
      'Learn practical TailwindCSS optimizations that improve performance without sacrificing design quality.',
    content: `
TailwindCSS is powerful — but without discipline, it can generate large CSS bundles.

Here are some tips to keep your design efficient and fast:
- Use **JIT (Just-In-Time)** mode — it compiles only what you use.
- Remove unused styles by configuring the \`content\` array in your \`tailwind.config.js\`.
- Prefer reusable components over repetitive utilities.

Performance is design. A lightweight site isn't just fast — it feels smooth and responsive.`,
    date: 'October 12, 2025',
    image: '/images/blog/2.jpg',
    author: {
      name: 'Your Name',
      role: 'Frontend Developer',
      avatar: '/profile.png',
    },
  },
  {
    id: 3,
    title: 'The Developer’s Mindset: Writing Clean Code',
    description:
      'Explore habits and principles that help developers write cleaner, more maintainable code for long-term success.',
    content: `
Writing clean code is more than syntax — it's a mindset.

The key habits include:
- Writing small, focused functions
- Using meaningful variable and function names
- Keeping consistent indentation and structure
- Avoiding repetition (DRY principle)
- Writing comments for *why*, not *what*

Remember: clean code is easy to read, easy to test, and easy to change — the true mark of a professional developer.`,
    date: 'October 2, 2025',
    image: '/images/blog/3.jpg',
    author: {
      name: 'Your Name',
      role: 'Full Stack Engineer',
      avatar: '/profile.png',
    },
  },
];
