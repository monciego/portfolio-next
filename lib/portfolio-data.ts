/**
 * Single source of truth for the About section text.
 *
 * Both `components/about/index.tsx` (the rendered About section) and
 * `components/terminal/index.tsx` (the "about" terminal command) import
 * from here. Edit once — both places update automatically.
 *
 * Note on paragraph 4:
 *   The terminal uses the plain-text version stored here.
 *   The About component renders its own JSX version of that same paragraph
 *   because it wraps certain words in styled Next.js <Link> components.
 *   When you update paragraph 4 here, also update the matching JSX block
 *   in components/about/index.tsx so both stay consistent.
 */
export const ABOUT_PARAGRAPHS = [
  // 0 — Introduction
  "Kumusta! My name is Jericho P. Bantiquete. I'm an indie software developer, freelancer, and aspiring entrepreneur from the Philippines. I graduated with a Bachelor's degree in Information Technology from Pangasinan State University. These days, I split my time between building products as a partner in a startup, working on my own projects, and taking on freelance work.",

  // 1 — Tech stack / primary focus
  "My primary focus is web application development, particularly around the Laravel ecosystem. I currently work mostly with Laravel, React, and TypeScript, alongside Inertia.js, shadcn/ui, and Tailwind CSS. For databases, I typically use MySQL or SQLite. I've also worked with technologies such as Next.js, Vue, Livewire, Angular, RxJS, Akita, React Native, and Figma across different freelance and industry projects. I'm comfortable learning and working with different technologies, but I don't try to use everything at once. My goal is to build a strong foundation and use the tools that make sense for the problem I'm solving.",

  // 2 — Learning & experimenting
  "Outside of my main stack, I enjoy recreational programming—building small things simply because I want to learn something or see what I can make with it. This gives me room to explore technologies that I don't necessarily use professionally. I've been experimenting with languages and tools such as Go and Rust, while continuing to improve my fundamentals in data structures and algorithms. I'm also interested in learning more about Python, machine learning, and artificial intelligence. I've recently become interested in game development as well. I want to explore what it's like to build games from the ground up and learn a completely different side of software development. Not every project I build has to become a product. Sometimes, I just want to build something because it's interesting.",

  // 3 — Writing, journaling & reading
  "I enjoy journaling and writing down thoughts, realizations, and things I'm learning. It has become a way for me to reflect on my work, understand how I think, and keep track of things I might otherwise forget. I also enjoy reading books, particularly as a way of continuously learning outside of programming. I keep a list of books I've read and want to read, which you can find here. I've also started sharing some of my shorter reflections about learning, growth, technology, and building things, which you can explore in my writings.",

  // 4 — Tools & outside of code (terminal uses plain text; About component uses JSX with links)
  "I use Vim and Zed as my primary editors. I've also been gradually building and maintaining my own dotfiles as I experiment with my development environment and make my tools feel more like my own. Outside of programming, I enjoy playing chess, learning guitar, reading books, listening to podcasts, and journaling. I also curate Spotify playlists and I've put together a gallery with some photos if you'd like to see a little more about my life outside of software.",

  // 5 — Closing
  "I'm still figuring out what kind of developer I want to become, but for now, I enjoy building things, learning how things work, and experimenting with ideas that interest me.",
] as const;

export type AboutParagraph = (typeof ABOUT_PARAGRAPHS)[number];
