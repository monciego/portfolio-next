import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      subTitle: s.string().max(99),
      slug: s.path(),
      date: s.isodate(),
      coverImage: s.image(),
      transitionImage: s.image(),
      sourceCodeLink: s.string().max(99).optional(),
      liveLink: s.string().max(99).optional(),
      isLiveLinkDisabled: s.boolean().default(false).optional(),
      isSourceCodeLinkDisabled: s.boolean().default(false).optional(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').slice(1).join('/'),
    })),
});

const blogs = defineCollection({
  name: 'Blog',
  pattern: 'writings/blogs/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug(),
    date: s.isodate(),
    excerpt: s.string().max(300).optional(),
    content: s.mdx(),
  }),
});

const reflections = defineCollection({
  name: 'Reflection',
  pattern: 'writings/reflections/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug(),
    date: s.isodate(),
    excerpt: s.string().max(300).optional(),
    content: s.mdx(),
  }),
});

const notes = defineCollection({
  name: 'Note',
  pattern: 'writings/notes/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug(),
    date: s.isodate(),
    excerpt: s.string().max(300).optional(),
    content: s.mdx(),
  }),
});

const poems = defineCollection({
  name: 'Poem',
  pattern: 'writings/poems/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug(),
    date: s.isodate(),
    excerpt: s.string().max(300).optional(),
    content: s.mdx(),
  }),
});

const journal = defineCollection({
  name: 'Journal',
  pattern: 'writings/journal/**/*.mdx',
  schema: s.object({
    title: s.string().max(99),
    slug: s.slug(),
    date: s.isodate(),
    excerpt: s.string().max(300).optional(),
    content: s.mdx(),
  }),
});

const testimonials = defineCollection({
  name: 'Testimonial',
  pattern: 'testimonials/**/*.mdx',
  schema: s.object({
    name: s.string().max(99),
    title: s.string().max(99),
    date: s.isodate(),
    avatar: s.image(),
    rawBody: s.raw(),
    content: s.mdx(),
  }),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    projects,
    testimonials,
    blogs,
    reflections,
    notes,
    poems,
    journal,
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: 'tokyo-night' }]],
    remarkPlugins: [],
  },
});
