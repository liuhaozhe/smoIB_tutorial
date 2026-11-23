import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://liuhaozhe.github.io',
  base: '/smoIB_tutorial',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'smoIB',
      description: 'Learn how to set up the environment, prepare spatial multi-omics data, run and benchmark integration methods, and reproduce the results reported in the paper.',
      defaultLocale: 'root',
      locales: { root: { label: 'English', lang: 'en' } },
      favicon: '/favicon-blue.svg',
      customCss: ['./src/styles/custom.css'],
      components: { SiteTitle: './src/components/SiteTitle.astro' },
      sidebar: [
        { label: 'Overview', slug: '' },
        {
          label: 'Getting started',
          items: [
            { label: 'Environment setup', slug: 'guides/installation' },
            { label: 'Data preparation', slug: 'guides/data-preparation' },
            { label: 'Quick start', slug: 'guides/getting-started' },
          ],
        },
        {
          label: 'Tutorials and reproduction',
          items: [
            { label: 'Tutorial 1 · Single-dataset analysis', slug: 'tutorials/single-dataset' },
            { label: 'Tutorial 2 · Reproducing the benchmark', slug: 'tutorials/benchmark-reproduction' },
          ],
        },
        {
          label: 'Datasets & methods',
          items: [
            { label: 'Methods and comparisons', slug: 'paper/methods' },
          ],
        },
        {
          label: 'Troubleshooting',
          items: [
            { label: 'Frequently asked questions', slug: 'reference/faq' },
          ],
        },
      ],
      expressiveCode: { styleOverrides: { borderRadius: '0.75rem' } },
    }),
  ],
});
