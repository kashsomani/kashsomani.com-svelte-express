<script>
  import { fade } from "svelte/transition";
  let arrow = false;
  let hover = false;
</script>

<div
  class="flex h-screen"
  transition:fade={{ duration: 1000 }}
  on:introend={() => (arrow = true)}
>
  <div class="grid grid-cols-1 place-items-center m-auto text-9xl w-full">
    <div>KASH SOMANI</div>
    <div class="w-full">
      <div id="arrow-button" class="grid grid-cols-1 place-items-center w-full">
        <div>
          <a
            href="#"
            on:mouseenter={() => (hover = true)}
            on:mouseleave={() => (hover = false)}
          >
            {#if hover}
              <img
                src="./assets/icons/arrow-right-teal.svg"
                alt=""
                width="full"
              />
            {:else}
              <img src="./assets/icons/arrow-right.svg" alt="" width="full" />
            {/if}
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
</style>
