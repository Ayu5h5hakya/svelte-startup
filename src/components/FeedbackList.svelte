<script>
  import { onMount, onDestroy } from "svelte";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { FeedbackStore } from "../store";
  let feedback = [];

  const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#each feedback as fb (fb.id)}
  <FeedbackItem item={fb} on:delete-feedback />
{/each}
