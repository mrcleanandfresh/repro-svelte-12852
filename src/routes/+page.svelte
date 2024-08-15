<script lang="ts">
	import { onMount } from 'svelte';
	import { FooExtendable } from '$lib/foo.svelte';

	let dependency = $state(null);

	let foo = $derived.by(() => {
		if (dependency) {
			return new FooExtendable();
		}
		return null;
	});

	onMount(() => {
		dependency = {};
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if foo != null}
	<p>Render some Content.</p>
	<pre>{foo.hasSomething}</pre>
{/if}
