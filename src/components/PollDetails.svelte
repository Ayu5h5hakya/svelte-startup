<script>
  export let poll;
</script>

<div class="poll">
  <h3>{poll.question}</h3>
  <div class="answer">
    <div class="percent percent-a" />
    <span>{poll.answerA} ({poll.voteA})</span>
  </div>
  <div class="answer">
    <div class="percent percent-b" />
    <span>{poll.answerB} ({poll.voteB})</span>
  </div>
</div>

<style></style>
