<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add new  Poll"];
  let activeItem = items[1];

  let polls = [
    {
      id: 1,
      question: "what is your favorite sleeping position?",
      answerA: "thunder kick",
      answerB: "facedown",
      voteA: 9,
      voteB: 16,
    },
  ];

  const onTabChange = (e) => {
    activeItem = e.detail;
  };

  const onNewPoll = (e) => {
    const newPoll = e.detail;
    polls = [newPoll, ...polls];
    activeItem = items[0];
    console.log("here");
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tab-change={onTabChange} />
  {#if activeItem === items[0]}
    <PollList {polls} />
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
