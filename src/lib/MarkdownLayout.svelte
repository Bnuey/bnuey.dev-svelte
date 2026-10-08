<!-- src/lib/MarkdownLayout.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>

<article class="prose dark:prose-invert max-w-none">
  {@render children()}
</article>
