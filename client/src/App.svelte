<script>
import Card from "./components/Card.svelte";

</script>

<main>
  <div class="grid grid-cols-4 place-items-center">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main{
    color:rgb(0, 225, 255);
  }

</style>
