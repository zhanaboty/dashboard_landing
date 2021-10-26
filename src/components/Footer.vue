<template>
    <div class="dives">
        <div class="div1">
            <h1>Если вы не победите себя, тогда будете побеждены самим собой.</h1>
        </div>
        <div class="div2">
            <h1>{{ updatedTime }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerr',
    data(){
        return {
            updatedTime: ""
        }
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function() {
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes();
            const dateTime = time;
            this.updatedTime = dateTime;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap');

.dives{
    display: flex;
    margin-top: 193px;
}
.div1{
    width: 80%;
    height: 262px;
    background: rgba(45, 45, 45, 1);
}
.div1 h1{
    margin-left: 200px;
    margin-top: 85px;
    font-family: 'Red Hat Text', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 93px;
    color: #FFFFFF;
}
.div2{
    width: 20%;
    height: 262px;
    background: rgba(4, 172, 72, 1);
}
.div2 h1{
    margin-top: 65px;
    margin-left: 195px;
    font-family: 'Red Hat Text', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 100px;
    line-height: 132px;
    color: #FFFFFF;
}
</style>
