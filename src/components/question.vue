<template>
  <b-container v-if="currentQS">
    <b-card-text>
      <p>
        {{ currentQS.question }}
      </p>

      <b-form-radio-group
        v-model="selected"
        :options="currentQS.incorrect_answers"
        class="mb-3"
        buttons
        stacked
        @change="getValue"
        disabled-field="notEnabled"
      >
        <b-form-radio v-model="selected" name="some-radios" :value="1">{{
          currentQS.correct_answer
        }}</b-form-radio>
      </b-form-radio-group>
    </b-card-text>
    <b-button @click="goBack">Back</b-button>
    <b-button @click="addAnswer">Next</b-button>
  </b-container>
</template>
<script>


export default {
  props: ["currentQS"],
  data() {
    return {
      results: [],
      selected: null,
      correct_selected: [],
      incorrect_selected: [],
      finall_result: [],
    };
  },
   computed: {
    finallResult(){
       return this.$store.state.finallResult
    }
  },
  methods: {
    getValue(e) {
      if (this.selected == 1) {
        this.currentQS.is_pass = true;
        this.currentQS.answer = this.selected;
      } else {
        this.currentQS.is_pass = false;
        this.currentQS.answer = this.selected;
      }
 
    },
    addAnswer() {

      if (this.selected) {
        this.finall_result = [...this.$store.getters["AllNewQuestion"]];
        this.finall_result.forEach((element) => {
          if (element.id == this.currentQS.id) {
            this.$store.state.finallResult=[...this.finall_result]
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