<template lang="html">
<b-container class="hours-log-page">
   <b-row>
     <b-col sm="8" offset-sm="2">
       <b-row class="mt-4 mb-4">
         <b-col>
           <h1>Hours Log</h1>
         </b-col>
         <b-col>
           <b-btn class="mt-2" variant="primary">+ Add Entry</b-btn>
         </b-col>
       </b-row>
       <b-row>
         <b-col>
             <b-table striped hover :items="items"></b-table>
         </b-col>
       </b-row>
     </b-col>
   </b-row>
</b-container>
</template>

<script>
export default {
  name : 'HoursLog',
  components :{
  },
  data() {
      return {
        items: [
          { projectName: 'company A',
          date: '12th July,2020',
          startTime: '7:00 AM',
          endTime:'10:00 AM'
        },
        ]
      }
    }
};
</script>
