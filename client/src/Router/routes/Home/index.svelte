<script>
  import Card from "./components/Card.svelte";
  import { fade } from 'svelte/transition'
</script>
<div class="flex h-screen" in:fade={{ duration: 600 }}>
  <div class="grid grid-cols-3 place-items-center m-auto font-bold">
    <Card text="Experience"/>
    <Card height="24em" width="24em" text="About Me"/>
    <Card text="Interests"/>
  </div>
</div>

<style>
  div{
    font-family: 'Orbitron', sans-serif;
  }
</style>