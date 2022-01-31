<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import CreatePollForm from "./CreatePollForm.svelte";
  import PollList from "./PollList.svelte";
  import Tabs from "../shared/Tabs.svelte";

  let items = ["Current Polls", "Add new  Poll"];
  let activeItem = items[0];

  const onTabChange = (e) => {
    activeItem = e.detail;
  };

  const onNewPoll = (e) => {
    activeItem = items[0];
  };

  const onAnswerA = (e) => {};

  const onAnswerB = (e) => {};
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tab-change={onTabChange} />
  {#if activeItem === items[0]}
    <PollList />
  {:else}
    <CreatePollForm on:add-poll={onNewPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
