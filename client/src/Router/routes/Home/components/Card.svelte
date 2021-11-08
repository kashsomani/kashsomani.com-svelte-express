<script>
	export let width = "18em"
	export let height = "18em"
	export let text = ""
</script>

<div
	style="--width: {width};--height: {height};"
	class="grid grid-cols-1 p-2 place-items-center"
>
	<div class="card p-2 text-center">
		<p>{text}</p>
	</div>
</div>

<style lang="postcss">
	.card {
		width: var(--width);
		height: var(--height);
		backdrop-filter: blur(4px) saturate(143%);
		-webkit-backdrop-filter: blur(4px) saturate(143%);
		background: rgba(0, 238, 255, 0.205);
		border: 1px solid rgba(0, 255, 191, 0.3);
		border-radius: 80px;
		@apply grid grid-cols-1 place-items-center;
	}
</style>
