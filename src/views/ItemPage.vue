<template>
    <itemCard class="card" :item="item"></itemCard>
</template>

<script>
    import itemCard from "../components/itemCard";
    export default {
        name: "ItemPage",
        components:{
            itemCard
        },
        data(){
            return{
                item:null
            }
        },
        created() {
            this.item = this.$store.getters.getItemById(Number(this.$route.params.id));
        }
    }
</script>

<style scoped>
.card{
    margin: 0 auto;
}
</style>