<template>
  <div>
    <div>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav card-header tabs>
            <b-nav-item>LOGO</b-nav-item>
            <b-nav-item @click="prevQuestion(Number($route.params.id))"
              >prev</b-nav-item
            >
            <b-nav-item>{{ $route.params.id }}/10</b-nav-item>
            <b-nav-item @click="nextQuestion(Number($route.params.id))"
              >next</b-nav-item
            >
            <b-nav-item to="/result" :disabled="reachResult">Result</b-nav-item>
          </b-nav>
        </b-card-header>
      </b-card>
      <Question
        @prev-question="prevQuestion(Number($route.params.id))"
        @next-question="nextQuestion(Number($route.params.id))"
        :currentQS="currentQS"
      />
    </div>
  </div>
</template>
<script>
import Question from "../components/question.vue";
export default {
  components: {
    Question,
  },
  data() {
    return {
      reachResult: true,
      selected: [],
      results: [],
      currentQS: {},
      currentId: 0,
    };
  },
  methods: {
    prevQuestion(id) {
      if (this.$route.params.id > 1) {
        this.$router.push({ path: `/question/${id - 1}` });
      } else {
        this.$route.params.id == 1;
      }
      console.log(this.$route.params.id);
      this.getCurrentQuestion(this.$route.params.id);
    },
    nextQuestion(id) {

      if (this.$route.params.id < 10) {
        this.$router.push({ path: `/question/${id + 1}` });
      } else if (this.$route.params.id == 10) {
        this.reachResult = false;
              

      }

      this.getCurrentQuestion(this.$route.params.id);
    },
    Refresh() {
      this.$store.dispatch("getData").then((_) => {
        this.results = this.$store.getters["AllNewQuestion"];
        this.getCurrentQuestion(1);


      });
    },
    getCurrentQuestion(id) {
      this.results.forEach((element) => {
        if (element.id == id - 1) {
          this.currentQS = element;
        }
      });
    },
  },
  created() {
    this.Refresh();
    if (!this.$route.params.id == 1) {
      this.$router.push({ path: `/question/${1}` });
    }
    this.results = this.$store.getters["AllNewQuestion"];
  },
};
</script>