/**
 * Single source of truth for the About section text.
 *
 * Both `components/about/index.tsx` (the rendered About section) and
 * `components/terminal/index.tsx` (the "about" terminal command) import
 * from here. Edit once — both places update automatically.
 *
 * Note on paragraph index 4:
 *   The terminal uses the plain-text version stored here.
 *   The About component renders its own JSX version of that same paragraph
 *   because it wraps certain words in styled Next.js <Link> components.
 *   When you update paragraph 4 here, also update the matching JSX block
 *   in components/about/index.tsx so both stay consistent.
 */
export const ABOUT_PARAGRAPHS = [
  // 0 — Introduction
  "Kumusta! My name is Jericho P. Bantiquete. I am an indie developer, freelancer, and aspiring entrepreneur. I graduated with a Bachelor's degree in Information Technology from Pangasinan State University. I'm currently based in the Philippines, where I'm building a product as a partner in a startup, developing my own projects, and taking on freelance work.",

  // 1 — Tech stack
  "Throughout my career, I've worked with a variety of technologies, including JavaScript, TypeScript, React, React Native, Next.js, Angular, RxJS, Akita, Vue, Laravel, Livewire, Inertia.js, Tailwind CSS, MySQL, Figma, Git, and GitHub. While not all of these are my primary tools, I've used them across freelance projects and industry work. My current stack focuses on Laravel with React and TypeScript, using Inertia.js, shadcn, and Tailwind CSS for building modern applications. For databases, I typically use MySQL or SQLite. Overall, my work is centered around the Laravel ecosystem, where I'm most productive.",

  // 2 — Currently learning
  "I'm currently improving my fundamentals in data structures and algorithms, while also exploring technologies like Golang, Astro, Remix, Python, and Java. I'm especially interested in going deeper into machine learning and artificial intelligence.",

  // 3 — Virtual Assistant experience
  "I've also worked as a Virtual Assistant, which gave me real-world experience in business operations, communication, and working with international clients.",

  // 4 — Hobbies / outside programming
  //   Terminal uses this plain-text version.
  //   The About component renders its own JSX version with inline <Link>
  //   components around "here" (book list), "here" (writing), "Spotify playlists", and "gallery".
  //   When you update the text here, mirror the change in components/about/index.tsx.
  "Outside of programming, I enjoy playing chess, learning music—especially guitar, reading books, and listening to podcasts. I also curate Spotify playlists and keep a list of books I've read and plan to read, which you can check out here. I've also started writing short reflections and realizations about learning, growth, and technology, which you can explore here. Additionally, I've set up a gallery with some photos, in case you're curious to see a bit more about me.",

  // 5 — Closing
  'I use vim and zed, btw.',
] as const;

export type AboutParagraph = (typeof ABOUT_PARAGRAPHS)[number];
