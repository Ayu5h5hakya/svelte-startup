<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Current Polls", "Add new  Poll"];
  let activeItem = items[0];

  const onTabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tab-change={onTabChange} />
  {#if activeItem === items[0]}
    <p>Poll listing selected</p>
  {:else}
    <p>Poll addition selected</p>
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
