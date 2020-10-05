<template>
  <div class="add container">
    <h2>添加用户</h2> 
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label >姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            <label >电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
            <label >年龄</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age">
        </div>
        <button type="submit" class="btn btn-primary">添加用户</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',

    data: function() {
        return {
          customer:{}
        };
    },
    methods:{
      addCustomer(e){
        // console.log("123");
        if(!this.customer.name){
          console.log("请添加对应的信息");
        }else{
          
          let newCustomer={
            name:this.customer.name,
            phone:this.customer.phone,
            age:this.customer.age,
          }
          this.$http.post("http://39.106.142.233:3000/users",newCustomer).then(function(response){
            // console.log(response);
          this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}});
          console.log("用户信息添加成功");
          })
        }
        e.preventDefault();
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
