<script>
  export let activeItem;
  export let items;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <div>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style></style>
