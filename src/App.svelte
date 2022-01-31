<script>
  import { Router, Route, Link } from "svelte-routing";
  import FeedbackApp from "./components/FeedbackApp.svelte";
  import PollingApp from "./components/PollingApp.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Poll</Link>
    <Link to="/feedback">Feedback</Link>
  </nav>

  <div>
    <Route path="/"><PollingApp /></Route>
    <Route path="/feedback"><FeedbackApp /></Route>
  </div>
</Router>
