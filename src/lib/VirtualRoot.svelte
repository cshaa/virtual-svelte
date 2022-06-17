<script lang="ts" context="module">
	import { onMount, onDestroy } from 'svelte';
	import { portal } from 'svelte-portal';
	import type { VirtualParent } from './virtualParent';
</script>

<script lang="ts">
	export let X: VirtualParent;
    export let parent: HTMLElement | string = "body";
    let el: HTMLElement;
</script>

<div
    bind:this={el}
	use:portal={parent}
	style:display="none !important"
	class:virtual-svelte={true}
	class:virtual-svelte-root={true}
>
	<slot />
</div>
