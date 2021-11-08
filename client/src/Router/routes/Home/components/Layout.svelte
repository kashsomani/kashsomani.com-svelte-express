<script>
	import Card from "./Card.svelte"
	import { fade } from "svelte/transition"
	import CardButton from "./CardButton.svelte"
	import { currentCard } from "../../../../stores/currentCard"
	let currentCardValue
	currentCard.subscribe(value => {
		currentCardValue = value
	})
</script>

<div class="flex h-screen" in:fade={{ duration: 1000 }}>
	<div
		class="grid gid-cols-1 place-items-center w-full grid-rows-4"
	>
		<div class="grid grid-cols-3  font-bold gap-6">
			<CardButton text="Experience" />
			<CardButton text="About Me" />
			<CardButton text="Interests" />
		</div>
		<div
			class="grid grid-cols-1 m-auto font-bold row-span-3"
		>
			<Card
				height="30em"
				width="30em"
				text={currentCardValue}
			/>
		</div>
	</div>
</div>

<style>
	div {
		font-family: "Orbitron", sans-serif;
	}
</style>
