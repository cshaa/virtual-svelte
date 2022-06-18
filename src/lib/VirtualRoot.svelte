<script lang="ts" context="module">
	import { portal } from 'svelte-portal';
	import type { Writable } from 'svelte/store';
</script>

<script lang="ts">
    export let parent: HTMLElement | string = "body";
    export let el: Writable<HTMLElement>;
</script>

<div
    bind:this={$el}
	use:portal={parent}
	style:display="none !important"
	class:virtual-svelte={true}
	class:virtual-svelte-root={true}
>
	<slot />
</div>
