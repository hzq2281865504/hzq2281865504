<template>
  <div class="header" v-bind:class="{'header_show':isuse_headershow}">
    <img src="../../assets/logo.png" class="logo">
    <ul class="menu_list" v-on:mouseover="changeClass()" v-on:mouseout="backClass()">
      <li class="menu_item" v-on:mouseover="changeClass(1)" v-on:mouseout="backClass(1)">
        <a class="txt">第一</a>
        <ul class="item_ul" v-bind:class="{'item_ul_show':isuse_itemulshow1,'item_hide':isitem_hide1}"  v-on:mouseover="changeClass()" v-on:mouseout="backClass()">
          <li><router-link to="/ListView">111</router-link></li>
          <li><router-link to="/FirstView">222</router-link></li>
          <li>333</li>
        </ul>
      </li>
      <li class="menu_item" v-on:mouseover="changeClass(2)" v-on:mouseout="backClass(2)">
        <a class="txt">长风破浪</a>
        <ul class="item_ul" v-bind:class="{'item_ul_show':isuse_itemulshow2,'item_hide':isitem_hide2}"  v-on:mouseover="changeClass()" v-on:mouseout="backClass()">
          <li>444</li>
          <li>555</li>
          <li>666</li>
        </ul>
      </li>
      <li class="menu_item" v-on:mouseover="changeClass()" v-on:mouseout="backClass()"><a class="txt">第三</a></li>
      <li class="menu_item" v-on:mouseover="changeClass()" v-on:mouseout="backClass()"><a class="txt">第四</a></li>
      <li class="menu_item" v-on:mouseover="changeClass()" v-on:mouseout="backClass()"><a class="txt">第五</a></li>
    </ul>
    <div class="header_right"><h2>Welcome~</h2></div>
  </div>
</template>

<script>
export default {
  name:'index',
  data(){
    return{
      show: 0,
      isuse_itemulshow1:false,
      isuse_itemulshow2:false,
      isitem_hide1:false,
      isitem_hide2:false,
      isuse_headershow:false,
      isuse_rightshow:false
    }
  },
  methods:{
    changeClass(x){
      if (x==1){
        this.isitem_hide1 = false;
        this.isuse_itemulshow1 = true;
      }
      if (x==2){
        this.isitem_hide2 = false;
        this.isuse_itemulshow2 = true;
      }
      this.isuse_headershow = true;
      this.isuse_rightshow = true;
    },
    backClass(x){
      if (x==1){
        this.isuse_itemulshow1 = false;
        this.isitem_hide1 = true;
      }
      if (x==2){
        this.isuse_itemulshow2 = false;
        this.isitem_hide2 = true;
      }
      this.isuse_headershow = false;
      this.isuse_rightshow = false;
    }
  }
}
</script>

<style scoped>
.header{
  z-index: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  height: 70px;
  transition: height 300ms;
  -moz-transition: height 300ms; /* Firefox 4 */
  -webkit-transition: height 300ms; /* Safari 和 Chrome */
  -o-transition: height 300ms; /* Opera */
}
.header_show{
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  display: flex;
  height: 70px;
  justify-content: space-around;
  align-items: flex-start;
  transition: height 300ms;
  -moz-transition: height 300ms; /* Firefox 4 */
  -webkit-transition: height 300ms; /* Safari 和 Chrome */
  -o-transition: height 300ms; /* Opera */
}
.header_show:hover{
  height: 470px;
}
.header .logo{
  position: absolute;
  top: 15px;
  left: 15%;
  display: block;
  width: 190px;
}
.menu_list{
  position: absolute;
  top: -9px;
  left: 30%;
  display: block;
  opacity: 1;
}
.menu_item{
  position: relative;
  margin-left: 100px;
  margin-top: 10px;
  display: block;
  float: left;
  font-size: 18px;
  font-family: "Microsoft YaHei UI Light";
  font-weight: bold;
}
ul,li{
  list-style: none;
}
.header_right{
  font-style: oblique;
  position: absolute;
  left: 85%;
}
.item_ul{
  display: none;
}
.item_ul_show{
  left: 50%;
  margin-left: -55px;
  display: block;
  margin-top: -10px;
  text-align: center;
  position: absolute;
  -webkit-transition: all .3s;
  opacity: 0.7;
  -webkit-animation:a_item_show 0.2s ease-out both;
}
.item_ul_show:hover{
  opacity: 1;
}
.item_hide{
  left: 50%;
  margin-left: -55px;
  pointer-events:none;
  display: block;
  margin-top: -10px;
  text-align: center;
  position: absolute;
  -webkit-animation:a_item_hide 0.15s ease-out both;
}
.item_ul li{
  display: block;
  text-align: center;
}
.txt{
  position: relative;
}
.txt:after{
  display:block;
  content:"";
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: -10px;
  left: 0px;
  background: #577bd7;
  opacity: 0;
  transform:scale(0.01,1);
  -webkit-transition: transform 0.2s ease-out,opacity 0.2s ease-out;
  transform-origin: 50% 0%;
}
.txt:hover:after{
  transform: scale(1,1);
  opacity: 1;
}

a{
  color: #5de9ff;
}

@keyframes a_item_show{
  0%{ -webkit-transform:translate(0px,-30px); opacity: 0;}
  100%{  -webkit-transform:translate(0px,0px); opacity: 1;}
}
@keyframes a_item_hide{
  0%{  -webkit-transform:translate(0px,0px); opacity: 1; }
  100%{ -webkit-transform:translate(0px,-30px); opacity: 0; }
}
@keyframes header_hide {
  from{height: 570px;}
  to{height: 70px;}
}
</style>