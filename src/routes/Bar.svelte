<script lang=ts>
    import { onMount, onDestroy } from "svelte";
    let el: HTMLSpanElement;

    onMount(() => console.log('mounted'));
    onDestroy(() => console.log('destroyed'));
    $: console.log(el);
</script>

<span bind:this={el}>Helou.</span>
