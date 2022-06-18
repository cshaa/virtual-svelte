<script lang="ts" context="module">
	import { afterUpdate, onDestroy } from 'svelte';
	import { portal } from 'svelte-portal';
	import type { VirtualParent } from './virtualParent';
</script>

<script lang="ts">
    type C = $$Generic;
	export let X: VirtualParent;
    export let content: C;

	let id = X.generateChildId();
    afterUpdate(() => X.childUpdated(id, content));
    onDestroy(() => X.childDestroyed(id));
</script>

<div
	style:display="none !important"
	class:virtual-svelte={true}
	class:virtual-svelte-child={true}
    data-virtual-svelte-uid={id}
>
	<slot />
</div>