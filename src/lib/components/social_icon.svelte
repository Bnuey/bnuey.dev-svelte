<script lang="ts">
    let { href, src, alt } = $props();

    let hovered = $state(false);
    let clicked = $state(false);

    function Hover() {
        hovered = true;
    }

    function UnHover() {
        hovered = false;
    }

    function Clicked() {
        clicked = true;
    }

</script>


<a {href} target="_blank" onmouseenter={Hover} onmouseleave={UnHover} onclick={Clicked}>
    <img {src} class={["sociallogo", { hovered }]} {alt}/>
</a>

<style>
    .sociallogo {
        width: 32px;
        height: 32px;
        transform: scale(1);
        transition: transform 0.4s;
    }


    .sociallogo.hovered {
        transform: scale(1.1);
    }
</style>