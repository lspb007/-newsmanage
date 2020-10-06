<template>
  <div class="customers container">
      <Alert  v-if="alert" v-bind:message="alert"></Alert>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>播出形式</th>
                <th>文稿标题</th>
                <th>时长</th>
                 <th>记者</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <td>{{customer.type}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.time}}</td>
                <td>{{customer.jizhe}}</td>
                <td><router-link class="btn btn-default"  v-bind:to="'/customer/'+customer.id">详情</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data: function() {
        return {
            customers:[],
            alert:""
        };
    },
    methods:{
        fetchCustomers(){
            this.$http.get("http://39.106.142.233:3000/news").then(function(response){
                // console.log(response);
                this.customers=response.body
            })
        }
    },
    created(){
        if(this.$route.query.alert){
            this.alert =this.$route.query.alert;
            
        }
       
        this.fetchCustomers();
    },
    // updated(){
    //     this.fetchCustomers();
    // },
    components:{
        Alert
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
