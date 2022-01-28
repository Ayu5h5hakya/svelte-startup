<script>
  import Button from "../shared/Button.svelte";
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;
  let submitHandler = () => {
    valid = true;
    if (fields.question.trim().length <= 5) {
      valid = false;
      errors.question = "Question must be atleast 5 characters long!";
    } else errors.question = "";
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer must be non empty";
    } else errors.answerA = "";
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer must be non empty";
    } else errors.answerB = "";

    if (valid) {
      console.log(fields);
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A value:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B value:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button type="secondary" flat={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    text-align: left;
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
  }
</style>
