<script>
  import FeedBackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  // let feedback = [];

  // $: count = feedback.length;
  // $: average = feedback.reduce((a, { rating }) => a + rating, 0);

  // const deleteFeedback = (e) => {
  //   const itemId = e.detail;
  //   feedback = feedback.filter((item) => item.id != itemId);
  // };

  // const addFeedback = (e) => {
  //   const newFeedback = e.detail;
  //   feedback = [newFeedback, ...feedback];
  // };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedBackList />
</main>
