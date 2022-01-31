<script>
  import Router from "svelte-spa-router";
  import FeedbackApp from "./components/FeedbackApp.svelte";
  import PollingApp from "./components/PollingApp.svelte";

  let routes = {
    "/": PollingApp,
    "/feedback": FeedbackApp,
  };
</script>

<main>
  <Router {routes} />
</main>
