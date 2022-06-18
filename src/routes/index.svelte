<script lang="ts">
	import Greet from './Greet.svelte';
	let names = [ 'world', 'xorld', 'yorld', 'zorld' ];
	
	const swapNames = (i: number, j: number) => () => {
		[names[i], names[j]] = [names[j], names[i]];
	}
</script>

<button on:click={swapNames(0,1)}>Swap first!</button>
<button on:click={swapNames(1,2)}>Swap second!</button>
<button on:click={swapNames(2,3)}>Swap third!</button>
<button on:click={swapNames(0,2)}>Swap even!</button>
<button on:click={swapNames(1,3)}>Swap odd!</button>

<!---->

<div id="foo">
	{#each names as name (name)}
		<Greet {name} />
	{/each}
</div>

<!---->