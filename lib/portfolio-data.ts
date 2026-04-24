/**
 * Single source of truth for the About section text.
 *
 * Both `components/about/index.tsx` (the rendered About section) and
 * `components/terminal/index.tsx` (the "about" terminal command) import
 * from here. Edit once — both places update automatically.
 *
 * Note on paragraph index 3:
 *   The terminal uses the plain-text version stored here.
 *   The About component renders its own JSX version of that same paragraph
 *   because it wraps certain words in styled Next.js <Link> components.
 *   When you update paragraph 3 here, also update the matching JSX block
 *   in components/about/index.tsx so both stay consistent.
 */
export const ABOUT_PARAGRAPHS = [
  // 0 — Introduction
  "Kumusta! My name is Jericho P. Bantiquete. I am a developer, freelancer, and aspiring entrepreneur. I graduated with a Bachelor's degree in Information Technology from Pangasinan State University. I am currently based in the Philippines, where I am building a product as a partner in a startup and also taking on freelance work.",

  // 1 — Tech stack
  "Throughout my career, I have worked with a variety of technologies, including JavaScript, TypeScript, React, NextJs, Angular, RxJS, Akita, Vue, Laravel, Livewire, Inertia.js, Tailwind CSS, MySQL, Figma, Git, GitHub, and more. While some of these are not my primary areas of expertise, I have gained valuable experience using them in both freelance projects and industry roles. My current tech stack, where I find the most productivity and which I primarily use for my projects, includes Laravel with React and TypeScript, utilizing Inertia.js, shadcn and Tailwind CSS for styling. For the database, I typically use MySQL or SQLite. Overall, my stack revolves around the Laravel ecosystem.",

  // 2 — Currently learning
  "Currently, I am continuously learning about data structures and algorithms. Additionally, I am exploring and expanding my knowledge in various technologies such as Golang, Astro, Remix, Python, and Java. As I continue to enhance my skills, I am particularly interested in learning more about machine learning and artificial intelligence.",

  // 3 — Hobbies / outside programming
  //   Terminal uses this plain-text version.
  //   The About component renders its own JSX version with inline <Link>
  //   components around "here", "Spotify Playlists", and "gallery".
  "Outside of programming, I enjoy playing chess, learning music—especially guitar, reading books, and listening to podcasts. I've created a list of books I've read and those I plan to read in the future. I also love curating Spotify Playlists. Additionally, I have set up a gallery with some photos, in case you're curious to see a bit more about me.",

  // 4 — Closing
  "I use vim, btw.",
] as const;

export type AboutParagraph = (typeof ABOUT_PARAGRAPHS)[number];
