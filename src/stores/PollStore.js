import { writeable } from "svelte/store";

const PollStore = writeable([
  {
    id: 1,
    question: "what is your favorite sleeping position?",
    answerA: "thunder kick",
    answerB: "facedown",
    voteA: 9,
    voteB: 16,
  },
]);

export default PollStore;
