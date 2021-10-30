<script>
  export let width = "18em";
  export let height = "18em";
</script>

<div
  style="--width: {width};--height: {height};"
  class="grid grid-cols-1 p-2 place-items-center"
>
  <div class="card p-2 text-center">
    <p>New Website Card</p>
  </div>
</div>

<style lang="postcss">
  .card {
    width: var(--width);
    height: var(--height);
    background: rgba(0, 240, 255, 0.2);
    border: 1px solid rgba(0, 240, 255, 0.6);
    border-radius: 80px;
    @apply grid grid-cols-1 place-items-center;
  }
</style>
