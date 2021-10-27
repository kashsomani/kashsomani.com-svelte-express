<script>
  import Card from "./components/Card.svelte";
</script>

<main>
  <div class="flex h-screen">
    <div class="grid grid-cols-3 place-items-center m-auto">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    color: rgb(0, 225, 255);
  }
</style>
