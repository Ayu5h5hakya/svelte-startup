<script>
  import { onDestroy, onMount } from "svelte";

  import PollStore from "../stores/PollStore.js";
  import PollDetails from "./PollDetails.svelte";
  export let polls = [];

  const unSub = PollStore.subscribe((data) => {
    console.log(data);
    polls = data;
  });

  onDestroy(() => {
    unSub();
  });
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
