import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for .svelte files only, since mdsvex 0.12 output uses legacy $$props.
				runes: ({ filename }) => {
					if (filename.split(/[/\\]/).includes('node_modules')) return undefined;
					return filename.endsWith('.svelte') ? true : undefined;
				}
			},
			adapter: adapter(),
			preprocess: [
				mdsvex({
					extensions: ['.svx', '.md'],
					layout: fileURLToPath(new URL('./src/lib/MarkdownLayout.svelte', import.meta.url))
				})
			],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});