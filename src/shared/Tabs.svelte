<script>
  import { createEventDispatcher } from "svelte";
  export let activeItem;
  export let items;

  const dispatch = createEventDispatcher();

  const onTabClick = (item) => {
    dispatch("tab-change", item);
  };
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li>
        <div
          class:active={item === activeItem}
          on:click={() => onTabClick(item)}
        >
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px #d91b42;
    padding-bottom: 8px;
  }
</style>
