<script lang="ts">
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	export let name: string;
	onMount(() => console.log('Mounted', name));
	beforeUpdate(() => console.log('Before update', name));
	afterUpdate(() => console.log('After update', name));
	$: console.log('Name changed', name);
	onDestroy(() => console.log('Unmounted', name));
</script>

<h1>Hello {name}!</h1>