<template>
    <div>
        <!-- {{total_points}}
           <b-table striped hover :items="Re_items" :fields="fields">

           
           </b-table> -->




             <b-table :fields="fields" :items="Re_items">
  
    
    <template v-slot:custom-foot>
 
      <tr>
        <td class="bg-primary text-white" :colspan="fields.length">
       Your Total Points is : {{total_points}}
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
            Re_items:[],
              fields: ['question', 'correct_answer', 'answer','points'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
        }
    },
    created() {    
this.Re_items= this.$store.state.finallResult



      this.Re_items.forEach((element) => {
          if (element.is_pass == false) {
            element.points=0
            element. _rowVariant= 'danger'
          }else{
               element.answer=element.correct_answer
              this.total_points =this.total_points+1
            element.points=1 
               element. _rowVariant= 'info'
             }
            //  if (element.answer==1) {
              
            //     element.answer=element.correct_answer
            //  }
        });
    },
}
</script>