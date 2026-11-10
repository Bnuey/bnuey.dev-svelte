<script>
    let { text, description = "", href } = $props();
</script>

<a {href}>
    <button class="dort">
        <span class="title">{text}</span>

        <span class="reveal">
            <span class="inner">
                {description}
            </span>
        </span>
    </button>
</a>

<style>
    button {
        display: block;
        width: 30rem; /* the fixed width */
        text-align: left;
        padding: 0.5rem 0.5rem 0.5rem 10%;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid #ffffff;
    }

    .dort {
        transition:
            transform 0.3s,
            scale 0.3s,
            rotate 0.3s;
        font-family: "Sour Gummy", sans-serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }

    .title {
        display: block;
        font-size: 3em;
        font-weight: bold;
    }

    /* the collapsible area */
    .reveal {
        display: grid;
        grid-template-rows: 0fr;
        opacity: 0;
        transition:
            grid-template-rows 0.3s ease,
            opacity 0.3s ease;
    }

    .inner {
        overflow: hidden;
        min-height: 0; /* required so the row can shrink to 0 */
    }

    .dort:hover .reveal,
    .dort:focus-visible .reveal {
        grid-template-rows: 1fr;
        opacity: 1;
    }

    .dort:hover {
        transform: scale(1.1);
    }

    .dort:nth-child(odd):hover {
        rotate: 1deg;
    }
    .dort:nth-child(even):hover {
        rotate: -1deg;
    }

    .dort:active {
        transform: scale(0.95);
        transition:
            transform 0.1s,
            scale 0.1s,
            rotate 0.1s;
    }
</style>
