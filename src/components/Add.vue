<template>
  <div class="add container">
    <h2>添加文稿</h2> 
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>文稿信息</h4>
        <div class="form-group">
          <label >文稿标题</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            <label >播出形式</label>
          <input type="text" class="form-control" placeholder="type" v-model="customer.type">
            <label >时长</label>
          <input type="text" class="form-control" placeholder="time" v-model="customer.time">
            <label >记者</label>
          <input type="text" class="form-control" placeholder="" v-model="customer.jizhe">
        </div>
        <button type="submit" class="btn btn-primary">添加文稿</button>
      </div>
    </form>
  </div>
</template>jizhe

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
            type:this.customer.type,
            time:this.customer.time,
            jizhe:this.customer.jizhe,
          }
          this.$http.post("http://39.106.142.233:3000/news",newCustomer).then(function(response){
            // console.log(response);
          this.$router.push({path:"/",query:{alert:"文稿信息添加成功!"}});
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
