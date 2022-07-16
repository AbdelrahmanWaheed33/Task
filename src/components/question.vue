<template>
  <b-container v-if="currentQS">
    <b-card class="text-center">
      <b-card-text>
        <b-alert show variant="primary">
          {{ currentQS.id + 1 }} / {{ currentQS.question }}</b-alert
        >
        <b-form-radio-group
          v-model="currentQS.answer"
          :options="currentQS.incorrect_answers"
          class="mb-3"
          buttons
       
          stacked
          @change="getValue"
          disabled-field="notEnabled"
        >
          <b-form-radio  v-model="currentQS.answer" name="some-radios" :value="1">{{
            currentQS.correct_answer
          }}</b-form-radio>
        </b-form-radio-group>
      </b-card-text>
      <b-button class="mx-4"  @click="goBack">Back</b-button>
      <b-button class="mx-4" :disabled="!currentQS.answer" @click="addAnswer">Next</b-button>
    </b-card>
  </b-container>
</template>
<script>
export default {
  props: ["currentQS"],
  data() {
    return {
      results: [],
      all_checked:[],
      selected: [],
      correct_selected: [],
      incorrect_selected: [],
      finall_result: [],
    };
  },
  computed: {
    finallResult() {
      return this.$store.state.finallResult;
    },
  },
  methods: {
    getValue(e) {
     
    this.currentQS.selected_answer=this.selected
  

      if ( this.currentQS.answer == 1) {
        this.currentQS.is_pass = true;
      
      } else {
        this.currentQS.is_pass = false;
      
      }
    },
    addAnswer() {
      if (this.currentQS.answer) {

        this.finall_result = [...this.$store.getters["AllNewQuestion"]];
        this.finall_result.forEach((element) => {
          if (element.id == this.currentQS.id) {
            this.$store.state.finallResult = [...this.finall_result];
            element = this.currentQS;
            this.$emit("next-question");
          }
        });
      }
    },
    goBack() {
      this.$emit("prev-question");
    },
  },
  mounted() {},
};
</script>