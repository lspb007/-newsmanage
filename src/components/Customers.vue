<template>
  <div class="customers container">
      <Alert  v-if="alert" v-bind:message="alert"></Alert>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>年龄</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <td>{{customer.name}}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.age}}</td>
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
            this.$http.get("http://39.106.142.233:3000/users").then(function(response){
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
