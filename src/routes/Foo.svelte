<script lang="ts">
    export let div: boolean;
</script>

{#if div}
    <div><slot /></div>
{:else}
    <span><slot /></span>
{/if}
