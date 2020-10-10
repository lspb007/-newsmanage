<template>
  <div class="edit container">
    <h2>编辑文稿</h2> 
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>文稿信息</h4>
        <div class="form-group">
          <label >名称</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
            <label >播出形式</label>
          <input type="text" class="form-control" placeholder="type" v-model="customer.type">
            <label >时长</label>
          <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" valueFormat='HH:mm:ss' @change="onChange" v-model="customer.time" />
            <label >记者</label>
          <input type="text" class="form-control" placeholder="jizhe" v-model="customer.jizhe">
           <label >文稿</label>
          <textarea class="form-control" rows="5" placeholder="description" v-model="customer.description" ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">编辑用户</button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'edit',

    data: function() {
        return {
          customer:{}
        };
    },
    methods:{
      moment,
       onChange(time, timeString) {
      console.log(timeString);
      },
      // customer.time=timeString;
      fetchCustomer(id){
        this.$http.get("http://39.106.142.233:3000/news/"+id).then(function(response){
          // console.log(response);
          this.customer= response.body;
        })
      },
      updateCustomer(e){
        // console.log("123");
        if(!this.customer.name){
          console.log("请添加对应的信息");
        }else{
          let s='';
          let hour = this.customer.time.split(':')[0];
          let min = this.customer.time.split(':')[1];
          let sec = this.customer.time.split(':')[2];
          s = Number(hour*3600) + Number(min*60) + Number(sec);
          let updateCustomer={
            name:this.customer.name,
            type:this.customer.type,
            time:s,
            jizhe:this.customer.jizhe,
            description:this.customer.description,
          }
          this.$http.put("http://39.106.142.233:3000/news/"+this.$route.params.id,updateCustomer).then(function(response){
            console.log(response);
          this.$router.push({path:"/",query:{alert:"文稿信息更新成功!"}});
          
          })
          e.preventDefault();
          }
          e.preventDefault();
      }
    },
  created(){
    this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
