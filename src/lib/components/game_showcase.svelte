<script lang="ts">
    import Gallery from "#lib/components/image_gallery.svelte";
    import TagBar from "./tag_bar.svelte";

    let { data } = $props();
</script>

<div class="game_showcase">
    <div class="column">
        <a href={data.href}>
            <img src={data.img.src} alt={data.img.alt} class="game_thumbnail" />
        </a>
        <Gallery images={data.photos} minSize="4rem" />
    </div>
    <div class="column">
        <a href={data.href}>
            <h1>{data.title}</h1>
            <hr />
            <TagBar data={data}/>
            <h4>
            </h4>

            <h4>{@html data.description}</h4>
        </a>
    </div>
</div>

<style>
    .column {
        flex: 1;
        margin: 0px;
        padding: 0px;
        text-align: left;
    }

    .game_showcase {
        display: flex;
        gap: 1rem;
        background-color: #00000050;
        transform: scale(1.0);
        transition:
            transform 0.3s,
            scale 0.3s,
            rotate 0.3s;
    }
    .game_showcase:hover {
        transform: scale(1.05);
    }

    .game_thumbnail {
        width: 100%;
        border: 2px solid #ffffff;
    }
</style>
