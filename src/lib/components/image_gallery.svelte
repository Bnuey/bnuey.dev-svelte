<script>
    /**
     * images: [{ src, alt, caption? }]
     * minSize: minimum thumbnail width, any CSS length
     */
    let { images = [], minSize = "12rem" } = $props();

    let dialog = $state();
    let index = $state(0);
    let current = $derived(images[index]);

    function open(i) {
        index = i;
        dialog.showModal();
    }

    function close() {
        dialog.close();
    }

    function next() {
        index = (index + 1) % images.length;
    }

    function prev() {
        index = (index - 1 + images.length) % images.length;
    }

    function onkeydown(e) {
        if (e.key === "ArrowRight") next();
        else if (e.key === "ArrowLeft") prev();
    }

    // Clicking the dim backdrop targets the <dialog> element itself
    function onbackdrop(e) {
        if (e.target === dialog) close();
    }
</script>

<div class="grid" style:--min={minSize}>
    {#each images as image, i}
        <button
            class="thumb"
            onclick={() => open(i)}
            aria-label="Open {image.alt}"
        >
            <img src={image.src} alt={image.alt} loading="lazy" />
        </button>
    {/each}
</div>

<!-- Esc is handled natively by <dialog>, arrow keys by onkeydown -->
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
    bind:this={dialog}
    {onkeydown}
    onclick={onbackdrop}
    aria-label="Image viewer"
>
    {#if current}
        <figure>
            <img src={current.src} alt={current.alt} />
            {#if current.caption}
                <figcaption>{current.caption}</figcaption>
            {/if}
        </figure>

        <button class="close" onclick={close} aria-label="Close">✕</button>

        {#if images.length > 1}
            <button class="nav prev" onclick={prev} aria-label="Previous image"
                >‹</button
            >
            <button class="nav next" onclick={next} aria-label="Next image"
                >›</button
            >
        {/if}
    {/if}
</dialog>

<style>
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .thumb {
        flex: 0 1 var(--min); /* fixed width, no growing, can shrink on narrow screens */
        padding: 0;
        border: 2px solid #ffffff;
        background: transparent;
        aspect-ratio: 1;
        overflow: hidden;
        cursor: pointer;
    }

    .thumb img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: scale 0.3s;
    }

    .thumb:hover img,
    .thumb:focus-visible img {
        scale: 1.08;
    }

    dialog {
        /* no padding, so a click on the backdrop is a click on the dialog itself */
        padding: 0;
        border: none;
        background: transparent;
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.85);
    }

    figure {
        margin: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        pointer-events: none; /* clicks fall through to the dialog and close it */
    }

    figure img {
        max-width: 90vw;
        max-height: 80vh;
        object-fit: contain;
        pointer-events: auto; /* but clicking the image itself does nothing */
    }

    figcaption {
        color: #ffffff;
        text-align: center;
        max-width: 60ch;
    }

    .close,
    .nav {
        position: absolute;
        background: transparent;
        color: #ffffff;
        border: 2px solid #ffffff;
        cursor: pointer;
        font-size: 1.5rem;
        line-height: 1;
        width: 2.75rem;
        height: 2.75rem;
        transition: scale 0.2s;
    }

    .close:hover,
    .nav:hover {
        scale: 1.1;
    }

    .close {
        top: 1rem;
        right: 1rem;
    }

    .nav {
        top: 50%;
        translate: 0 -50%;
    }

    .prev {
        left: 1rem;
    }

    .next {
        right: 1rem;
    }

    @media (prefers-reduced-motion: reduce) {
        .thumb img,
        .close,
        .nav {
            transition: none;
        }
    }
</style>
