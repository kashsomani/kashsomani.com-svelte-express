<script>
  import Card from "./components/Card.svelte";
</script>
<div class="flex h-screen">
  <div class="grid grid-cols-3 place-items-center m-auto font-bold">
    <Card />
    <Card height="24em" width="24em"/>
    <Card />
  </div>
</div>

<style>
  div{
    font-family: 'Orbitron', sans-serif;
    color:rgb(0, 0, 0);
  }
</style>