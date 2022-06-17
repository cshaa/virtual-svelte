<script lang="ts">
import Bar from "./Bar.svelte";
import Foo from "./Foo.svelte";

    let toggle = true;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => toggle = !toggle}>Toggle</button>
<Foo div={toggle}><Bar /></Foo>
