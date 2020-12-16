<template>
  <div class="main">
    <template>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in img_list" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <div>
      11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

    </div>
    This is FirstView.
  </div>
</template>

<script>
export default {
  name:"FirstView",
  data(){
    return {
      img_list:[
        "../pic/zmd1.jpg",
        "../pic/zmd2.png",
        "../pic/zmd3.jpg",
      ]
    }

  }
}
</script>


<style scoped>
.main{
}

.el-carousel__item{
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

img{
  width: 100%;
}
</style>