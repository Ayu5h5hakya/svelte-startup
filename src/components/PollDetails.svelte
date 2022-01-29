<script>
  import Card from "../shared/Card.svelte";
  import { createEventDispatcher } from "svelte";
  export let poll;
  const dispatch = createEventDispatcher();

  $: totalVotes = poll.voteA + poll.voteB;

  onAnswerA = () => {
    dispatch("answer-a", { poll });
  };

  onAnswerB = () => {
    dispatch("answer-b", { poll });
  };
</script>

<Card>
  <div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={onAnswerA}>
      <div class="percent percent-a" />
      <span>{poll.answerA} ({poll.voteA})</span>
    </div>
    <div class="answer" on:click={onAnswerB}>
      <div class="percent percent-b" />
      <span>{poll.answerB} ({poll.voteB})</span>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
    color: red;
  }
</style>
