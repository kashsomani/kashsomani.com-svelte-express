<script>
	export let width = "8em"
	export let height = "8em"
	export let text = ""
  import { currentCard } from "../../../../stores/currentCard"
</script>

<button on:click={()=>(currentCard.set(text))}>
  <div
	style="--width: {width};--height: {height};"
	clbuttonss="grid grid-cols-1 place-items-center"
>
	<div class="box p-2 text-center">
		<p>{text}</p>
	</div>
</div>

</button>
<style lang="postcss">
	.card {
		backdrop-filter: blur(4px) saturate(143%);
		-webkit-backdrop-filter: blur(4px) saturate(143%);
		border: 1px solid rgba(0, 255, 191, 0.3);
	}
	.box {
		width: var(--width);
		height: var(--height);
		background: rgba(0, 238, 255, 0.205);
		border-radius: 80px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		-webkit-transition: all 0.6s
			cubic-bezier(0.165, 0.84, 0.44, 1);
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		@apply grid grid-cols-1 place-items-center;
	}

	.box::after {
		content: "";
		border-radius: 80px;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		opacity: 0;
		-webkit-transition: all 0.6s
			cubic-bezier(0.165, 0.84, 0.44, 1);
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.box:hover {
		-webkit-transform: scale(1.25, 1.25);
		transform: scale(1.25, 1.25);
	}

	.box:hover::after {
		opacity: 1;
	}
</style>
