<script lang="ts">
    let { data } = $props();
    import Tag from "#lib/components/tag.svelte";
</script>

<div class="hbox">
    {#each data.tags as tag}
        <Tag label={tag} />
    {/each}
</div>

<style>
    .hbox {
        display: flex;
        flex-direction: row;
        gap: 8px;
        flex: 1 1 0;
    }
</style>
