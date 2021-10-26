<template>
          <div class="boxes1">
        <div class="box1" style="background: linear-gradient(89.69deg, #F39034 2.03%, #FF2727 99.73%)">
          <h1>Продажи</h1>
          <h2>План</h2>
          <p>100</p>
          <h3>Факт</h3>
          <h4>36</h4>
        </div>
        <div class="box" style="background: linear-gradient(270deg, #003AD2 0%, #0097EC 100%);">
          <h1>Прибыль</h1>
          <h2>План</h2>
          <p>4 000 000</p>
          <h3>Факт</h3>
          <h4>{{ myJson.overallResult }}</h4>
        </div>
        <div class="box" style="background: linear-gradient(270.23deg, #00A843 0.19%, #1FD071 99.8%);">
          <h1>Выдано</h1>
          <h2>План</h2>
          <p>100</p>
          <h3>Факт</h3>
          <h4>{{ myJson.soldResult }}</h4>
        </div>
        <div class="box" style="background: linear-gradient(269.97deg, #5900C9 0.02%, #9852F0 99.98%);">
          <h1>Заявки</h1>
          <h2>План</h2>
          <p>2000</p>
          <h3>Факт</h3>
          <h4>{{ myJson.zayavkiResult }}</h4>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
import json from '../../db.json';

export default {
    name: 'box1',
    data(){
        return {
            myJson : json
        }
    },
    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/posts`);

      this.todos = res.data;

    } catch(e) {
      console.error(e);
    }
  }
}

</script>

<style scoped>
.box{
  width: 900px;
  height: 608px;
  border-radius: 20px;
  margin-left: 80px;
  text-align: center;
}
.box1{
  width: 900px;
  height: 608px;
  border-radius: 20px;
  text-align: center;
}
.boxes1{
  margin-top: 46px;
  display: flex;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
}
.box1 h1, .box h1{
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 132%;
  margin-top: 16px;
}
.box1 h2, .box h2{
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 79px;
  letter-spacing: 1.96312px;
  margin-top: 43px;
}
.box1 h3, .box h3{
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 79px;
  letter-spacing: 1.96312px;
  margin-top: 20px;
}
.box1 p, .box p{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 79px;
  letter-spacing: 1.96312px;
  border-bottom: 1px solid white;
  width: 550px;
  margin-left: 180px;
  padding-bottom: 20px;
  text-align: center;
  margin-top: 13px;
}
.box1 h4, .box h4{
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 79px;
  letter-spacing: 1.96312px;
  margin-top: 13px;
}
</style>