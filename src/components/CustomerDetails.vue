<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">{{customer.name}}
    <span class="pull-right">
      <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">编辑</router-link>
      <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
    </span>
    </h1>
    <ul class="list-group"></ul>
    <li>{{customer.type}}</li>
    <li>{{customer.time}}</li>
    <li>{{customer.jizhe}}</li>
    <li>{{customer.description}}</li>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',

    data: function() {
        return {
          customer:""
        };
    },
    methods:{
             fetchCustomers(id){
            this.$http.get("http://39.106.142.233:3000/news/"+id).then(function(response){
                console.log(response);
                this.customer=response.body
            })
        },
        deleteCustomer(id){
          // console.log(id);
          this.$http.delete("http://39.106.142.233:3000/news/"+id).then(function(response){
            this.$router.push({path:"/",query:{alert:"用户信息删除成功!"}});
          })
        }


        
      },
      created(){
        this.fetchCustomers(this.$route.params.id);
    
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
