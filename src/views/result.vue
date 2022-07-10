<template>
    <div>

             <b-table :fields="fields" :items="result_items">
  
    
    <template v-slot:custom-foot>
 
      <tr>
        <td class="bg-primary text-white" :colspan="fields.length">
       Your Total Points is : {{total_points}}
        </td>
      </tr> 
       <tr>
        <td class="bg-primary text-white" :colspan="fields.length">
         <b-button @click="goBack">Re Test</b-button>
        </td>
      </tr>
    </template>
  </b-table>

    </div>
</template>
<script>
export default {
    data() {
        return {
            total_points:0,
            result_items:[],
              fields: ['question', 'correct_answer', 'answer','points'],

        }
    },
    created() {    
this.result_items= this.$store.state.finallResult



      this.result_items.forEach((element) => {
          if (element.is_pass == false) {
            element.points=0
            element. _rowVariant= 'danger'
          }else{
               element.answer=element.correct_answer
              this.total_points =this.total_points+1
            element.points=1 
               element. _rowVariant= 'info'
             }

        });
    },
    methods: {
      goBack(){
        this.$router.push({ path: `/question/1` })
       this. $store.state.reachResult=true
      }
    },
}
</script>