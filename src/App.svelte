<script>
  import FeedBackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedBackStats from "./components/FeedbackStats.svelte";
  import FeedBackForm from "./components/FeedbackForm.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((a, { rating }) => a + rating, 0);

  const deleteFeedback = (e) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id != itemId);
  };

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:feedback-submit={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedBackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
