<template>
  <div class="customers container">
      <Alert  v-if="alert" v-bind:message="alert"></Alert>

           




    <table class="table table-striped">
        <thead>
            <tr>
                 <th>序号</th>
                <th>播出形式</th>
                <th>文稿标题</th>
                <th>时长</th>
                 <th>累计时长</th>
                 <th>记者</th>
                <th></th>
            </tr>
        </thead>
        <draggable  tag="tbody" @start="onStart" @end="onEnd">
             
                 <!-- <draggable v-model="customers" group="customer"> -->
            <tr v-for="(customer,index) in customers" :key="customer.id">
                <td>{{index+1}}</td>
                <td>{{customer.type}}</td>
                <td>{{customer.name}}</td>
                <td	>{{customer.time}}</td>
                <td >{{customer.gtime}}</td>
                <td>{{customer.jizhe}}</td>
                <td><router-link class="btn btn-default"  v-bind:to="'/customer/'+customer.id">详情</router-link></td>
                
            </tr>

            <!-- </draggable> -->
        </draggable>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
import draggable from "vuedraggable"
import Vue from 'vue'
export default {
  name: 'customers',
  data: function() {
        return {
            customers:[],
            alert:"",
            i:0,
        };
    },
    methods:{
        onStart() {
                    this.drag = true;
                },
         onEnd() {
                    this.drag = false;
                    //拖拽完成后的顺序
                    let arr = []
                    this.customers.forEach((item) => {
                        arr.push(item.id)
                    })
                    // console.log(arr)
                    //拖拽后利用localStorage记录顺序
                    localStorage.arr = arr;
                    var localSt = localStorage.arr;//已经存储起来的排序后的id
                    //如果有localst记录则，按照这个进行排序元素
                    if (localSt) {
                        // console.log(localSt)
                        var resArr = localSt.split(',');
                        var resUl = $('.box>div:eq(0)');
                        //li 数组
                        // for (var i = 0; i < resArr.length; i++) {
                        //     resUl.append($("#" + resArr[i]));
                        // }
                        let arrSort = [];//定义一个变量，用来存储排序后id对应的数据
                        for (let index = 0; index < resArr.length; index++) {//循环已经存储到localStorage中的数组id
                            const element = resArr[index];
                            // console.log(index)
                            this.customers.map(item => {//循环已经获取到的数组数据，根据存储到localStorage中的Id匹配到对应的数据
                                if (item.id == resArr[index]) {
                                    arrSort.push(item)
                                }
                            });

                        }
                        this.customers = arrSort
                        console.log(this.customers, '哈哈')
　　　　　　　　　　　　　　//将排序后的存储到sessioStorage中
                        // sessionStorage.setItem('customers', JSON.stringify(this.myArray))

                    }
                },
        sumCustomers(){

        },
        fetchCustomers(){
            this.$http.get("http://39.106.142.233:3000/news").then(function(response){
                // console.log(response);
                this.customers=response.body;
                let times=0;
                // console.log(this.customers.length);
                for(var item=0;item<this.customers.length;item++){  //遍历对象数组，item表示某个具体的对象
                     
                     Vue.set(this.customers[item],'gtime',this.customers[item].time+times)
                     times=this.customers[item].gtime
                    // this.customers[item].gtime=times+this.customers[item].gtime
                    
                     console.log(this.customers[item].time,"---",this.customers[item].gtime,"---",times)
                    // this.customers[item].time=this.customers[item].time+2
	                  for(var i in this.customers[item]){
                              //使用for in 遍历对象属性
                             
		                    //  console.log("1")  //objectList[item][i]表示某个对象的某个
									       
	}
}
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
        Alert,
        draggable,
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
