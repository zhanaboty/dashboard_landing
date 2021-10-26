<template>
        <div class="boxes2">
        <div class="boxes2-1">
          <h2>Продажи</h2>
          <div class="box2">
            <img src="../assets/Group236.png" alt="sdds">
            <div class="num">
              <h1 class="num1">2000</h1>
              <p>заявок</p>
              <h1 id="m" class="num1">{{ myJson.countQualifiedResult }}</h1>
              <p>квалифицировано</p>
              <h1 id="m" class="num1">{{ myJson.countMeetingResult }}</h1>
              <p>встреч в офисе</p>
              <h1 id="m" class="num1">{{ myJson.prodazhiResult }}</h1>
              <p>купили</p>
            </div>
          </div>
        </div>
        <div class="boxes2-2">
          <h2>Среднее</h2>
          <div class="box2">
            <div class="bb">
              <div class="ppp">
                <p>Прибыль:</p>
                <h5> 34 000  ₸</h5>
                <div class="border"></div>
              </div>
              <div class="ppr">
                <p>Чек продаж:</p>
                <h5> 34 000  ₸</h5>
                <div id="border"></div>              
              </div>
              <div class="ppr">
                <p>Себестоимость производства:</p>
                <h5> 34 000  ₸</h5>
                <div id="border"></div>              
              </div>
              <div class="ppr">
                <p>Логистика:</p>
                <h5> 34 000  ₸</h5>
                <div id="border"></div>              
              </div>
              <div class="ppr">
                <p>Kaspi %:</p>
                <h5> 34 000  ₸</h5>
                <div id="border"></div>              
              </div>  
            </div>
          </div>
        </div>
        <div class="boxes2-2">
          <h2>Выдача</h2>
          <div class="box2">
            <div class="bb">
              <div class="ppp">
                <p class="pp">Сред. время выдачи</p>
                <h5> 3 дня</h5>
                <div id="border"></div>
              </div>
              <div class="ppr">
                <p class="pr">Возвраты:</p>
                <h5> 3 дивана</h5>
                <div id="border"></div>              
              </div>
              <div class="ppr">
                <p class="pr">Загруженность:</p>
                <h5>2 дня</h5>
                <div id="border"></div>              
              </div>        
            </div>
          </div>
        </div>
        <div class="boxes2-2">
          <h2>Потрачено на рекламу</h2>
          <div class="box2">
            <div class="bb">
              <div class="pp3">
                <p>Реклама</p>
                <p>Потрачено</p>
                <p>Заявок</p>
                <p>Продаж</p>
                <p>Заработано</p>
                <div id="border"></div>
              </div>
              <div class="ppr3">
                <p><b>#instafb1</b></p>
                <p><b>328$</b></p>
                <p><b>23</b></p>
                <p><b>2</b></p>    
                <p><b>68 000 ₸</b></p>                  
              </div>
              <div id="border"></div>    
              <div class="ppr3">
                <p><b>#instafb1</b></p>
                <p><b>328$</b></p>
                <p><b>23</b></p>
                <p><b>2</b></p>    
                <p><b>68 000 ₸</b></p>                   
              </div>   
              <div id="border"></div>    
              <div class="ppr3">
                <p><b>#instafb1</b></p>
                <p><b>328$</b></p>
                <p><b>23</b></p>
                <p><b>2</b></p>    
                <p><b>68 000 ₸</b></p>         
              </div>   
              <div id="border"></div> 
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
import json from '../../db.json';

export default {
    name: 'box2',
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
.divText{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 98px;
  color: #404040;
  text-align: center;
  margin-top: -60px;
}
.appp{
  margin:0 80px;
}
.statText{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 132%;
  display: flex;
  align-items: center;
  color: #333333;
  margin-top: 55px;
}
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
.boxes2{
  margin-top: 102px;
  display: flex;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
}
.box2{
  width: 900px;
  height: 608px;
  border-radius: 8px;
  border: 1px solid #969696;
}
.ppp p{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.06em;
  color: #252733; 
}
.pp3 p{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.06em;
  color: #252733;
  margin-right: 13px;
}
.boxes2 h2{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 132%;
  display: flex;
  align-items: center;
  color: #333333;
  margin-bottom: 41px;
}
.boxes2-2{
  margin-left: 80px;
}
.ppp{
  display: inline;
}
.pp3{
  display: flex;
}
.ppp h5{
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.49415px;
  color: #000000;
  float: right;
  margin-top: -37px;
  margin-right: 70px;
}
.bb{
  margin-left: 40px;
  margin-top: 64px;
}
#border{
  border-bottom: 2.47075px solid #DFE0EB;
  margin-left: -40px;
  margin-top: 20px;
  transform: rotate(-0.01deg);
}
.ppr h5{
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.49415px;
  color: #000000;
  float: right;
  margin-top: -37px;
  margin-right: 70px;
}
.ppr3{
  display: flex;
}
.ppr p{
  margin-top: 40px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 0.06em;
  color: #252733; 
}
.ppr3 p{
  margin-top: 40px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin-right: 56.4px;
}
.box2 img{
  margin-left: 180px;
  margin-top: 44px;
  position: relative;
}
#m{
  margin-top: 43px;
}
#n{
  margin-top: 30px;
}
.num1{
  font-style: normal;
  font-weight: 500;
  font-size: 43.058px;
  line-height: 52px;
}
.num{
  position: absolute;
  left: 400px;
  bottom: 325px;
  color: #FFFFFF;
  text-align: center;
}
.num p{
  font-style: normal;
  font-weight: 500;
  font-size: 26.9112px;
  line-height: 33px;
}
</style>
