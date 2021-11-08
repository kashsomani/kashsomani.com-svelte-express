<script>
	import { fade } from "svelte/transition"
	let hover = false
</script>

<div class="flex h-screen" in:fade={{ duration: 1000 }}>
	<div
		class="grid grid-cols-1 place-items-center m-auto text-9xl w-full"
	>
		<div class="fade {!hover ? '' : 'teal'}">
			KASH SOMANI
		</div>
		<div class="w-full">
			<div
				id="arrow-button"
				class="grid grid-cols-1 place-items-center w-full"
			>
				<div>
					<a
						href="#/home"
						on:mouseenter={() => (hover = true)}
						on:mouseleave={() => (hover = false)}
					>
						<div class="grid grid-cols-1 place-items-center">
              <svg
							width="90%"
							height="74"
							viewBox="0 0 1861 74"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="arrow {!hover ? '' : 'teal'}"
								d="M1859.52 40.547C1861.48 38.6007 1861.49 35.4348 1859.55 33.4759L1827.83 1.55336C1825.88 -0.405566 1822.72 -0.415806 1820.76 1.53049C1818.8 3.47679 1818.79 6.64259 1820.74 8.60152L1848.93 36.9771L1820.55 65.1698C1818.59 67.1161 1818.58 70.2819 1820.53 72.2408C1822.48 74.1997 1825.64 74.21 1827.6 72.2637L1859.52 40.547ZM0.983828 36L1855.98 42L1856.02 32L1.01617 26L0.983828 36Z"
							/>
						</svg>
            </div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#arrow-button {
		height: 0.5em;
	}
	div {
		font-family: "Orbitron", sans-serif;
		/* font-family: Bruno Ace; */
		/* font-family: Bungee Shade; */
		/* font-family: Codystar; */
		/* font-family: Digital Numbers; */
		/* font-family: Exo; */
		/* font-family: Geo; */
		/* font-family: Keania One; */
		/* font-family: Libre Barcode 39 Extended Text; */
		/* font-family: Montserrat Alternates; */
		/* font-family: Nico Moji; */
		/* font-family: Nova Flat; */
		/* font-family: Press Start 2P; */
		/* font-family: Red Hat Text; */
		/* font-family: Russo One; */
	}
	.fade {
		color: black;
		-webkit-transition: color 1s;
		transition: color 1s;
	}
	.arrow {
		fill: black;
		-webkit-transition: color 2s;
		transition: fill 2s;
	}
	.fade.teal {
		color: #00f0ff;
	}
  .arrow.teal {
		fill: #00f0ff;
	}
</style>
