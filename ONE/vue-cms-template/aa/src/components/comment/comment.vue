<template>
    <div class="comment">
        <input type="text" v-model="mess">
        <button  @click="setmes" >发送</button>
    </div>
</template>
<script>
export default {
    name:'ComMent',
   
    data(){
        return{ 
            mess:this.mess

        }
    },
    methods:{
        setmes(){
             this.$emit('setmes',this.mess)
        }
    }

    
}
</script>
<style lang="scss" scoped>
.comment{
    display: flex;
    position: fixed;
    bottom: 0rem;
    z-index: 100;
    width: 100%;
        padding: .2rem;
    background: #78e478;
}
input{
        margin: 0rem;
}
</style>