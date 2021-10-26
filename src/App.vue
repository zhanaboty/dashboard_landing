<template>
  <div id="app">
    <div class="appp">
      <h4 class="dashText">Dashboard</h4>
      <h1 class="divText">Диваны</h1>
      <h2 class="statText">Статистика</h2>
      <box1/>
      <box2/>
  </div>
   <footerr/>
</div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.dashText{
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.4px;
  color: #444444;
  opacity: 0.7;
  margin-top: 47px;
}
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
</style>
