import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'ClawFi Docs',
      description: 'Documentation for ClawFi crypto intelligence platform',
      social: {
        github: 'https://github.com/ClawFiAI',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/guides/introduction/' },
            { label: 'Quick Start', link: '/guides/quickstart/' },
            { label: 'Installation', link: '/guides/installation/' },
          ],
        },
        {
          label: 'Extension',
          items: [
            { label: 'Overview', link: '/extension/overview/' },
            { label: 'Features', link: '/extension/features/' },
            { label: 'Supported Sites', link: '/extension/sites/' },
          ],
        },
        {
          label: 'API',
          items: [
            { label: 'Authentication', link: '/api/auth/' },
            { label: 'Endpoints', link: '/api/endpoints/' },
            { label: 'SDK', link: '/api/sdk/' },
          ],
        },
        {
          label: 'Packages',
          items: [
            { label: 'dexscreener-ts', link: '/packages/dexscreener-ts/' },
            { label: 'clawfi-sdk', link: '/packages/clawfi-sdk/' },
            { label: 'clawfi-signals', link: '/packages/clawfi-signals/' },
          ],
        },
      ],
    }),
  ],
});
