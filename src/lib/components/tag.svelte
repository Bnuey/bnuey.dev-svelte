<script lang="ts">
    let { label } = $props();
</script>

<div class="tag">
    <h4>
        {label}
    </h4>
</div>

<style>
    .tag {
        border-radius: 2em;
        background-color: #421f4eff;
        border: 2px solid #ffffff;
        display: block;
        text-align: center;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.8rem;
    }
    h4 {
        padding: 0px;
        margin: 10px;
    }
</style>
