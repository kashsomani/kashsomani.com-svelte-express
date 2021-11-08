<script>
  import Router from './Router/index.svelte'
</script>
<svelte:head>
  <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
</svelte:head>
<main>
  <Router/>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    color: #fff;
  }
</style>
