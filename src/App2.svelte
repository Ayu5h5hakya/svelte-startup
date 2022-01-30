<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add new  Poll"];
  let activeItem = items[1];

  const onTabChange = (e) => {
    activeItem = e.detail;
  };

  const onNewPoll = (e) => {
    // const newPoll = e.detail;
    // polls = [newPoll, ...polls];
    // activeItem = items[0];
  };

  const onAnswerA = (e) => {
    // const { poll } = e.detail;
    // const id = poll.id;
    // let copiedPolls = [...polls];
    // let upvotedPoll = copiedPolls.find((item) => item.id == id);
    // upvotedPoll.voteA++;
  };

  const onAnswerB = (e) => {
    // const { poll } = e.detail;
    // const id = poll.id;
    // let copiedPolls = [...polls];
    // let upvotedPoll = copiedPolls.find((item) => item.id == id);
    // upvotedPoll.voteB++;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tab-change={onTabChange} />
  {#if activeItem === items[0]}
    <PollList on:answer-a={onAnswerA} on:answer-b={onAnswerB} />
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
