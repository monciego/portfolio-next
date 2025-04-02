import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const projects = defineCollection({
  name: 'Project', // collection type name
  pattern: 'projects/**/*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      subTitle: s.string().max(99), // Zod primitive type
      slug: s.path(), // validate format, unique in posts collection
      // slug: s.path(), // auto generate slug from file path
      date: s.isodate(), // input Date-like string, output ISO Date string.
      coverImage: s.image(), // input image relative path, output image object with blurImage.
      transitionImage: s.image(), // input image relative path, output image object with blurImage.
      githubLink: s.string().max(99),
      liveLink: s.string().max(99),
      isLiveDisabled: s.boolean().default(false).optional(),
      isGithubDisabled: s.boolean().default(false).optional(),
      content: s.mdx(), // transform markdown to html
    })
    // more additional fields (computed fields)
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').slice(1).join('/'),
    })),
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
  collections: { projects },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: 'tokyo-night' }]],
    remarkPlugins: [],
  },
});

/* 
test the output
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
*/
