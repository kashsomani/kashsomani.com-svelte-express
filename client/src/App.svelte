<script>
	export let name;
</script>

<main>
	<div class="bg-red-700">
		hi
	</div>
	<h1>hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
  </style>