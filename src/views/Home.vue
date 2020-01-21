<template>
    <div class="home">
        <select name="brands" v-model="brand" >
            <option value="" selected>all</option>
            <option :key="item" v-for="item in selectors.brand">{{ item }}</option>
        </select>
        <select name="categories" v-model="category">
            <option value="" selected>all</option>
            <option :key="item" v-for="item in selectors.categories">{{ item }}</option>
        </select>
        <p align="center">{{ result.length }} items</p>
        <div class="catalog"><itemCard @cardclick="goToCard" :key='item.id' v-for="item in result" :item="item"> </itemCard></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import itemCard from "../components/itemCard";
    export default {
        name:'Home',
        components:{
            itemCard
        },
        data(){
            return{
                category:'',
                brand: '',
            }
        },
        computed:{
          ...mapState([
              'selectors',
              'data'
          ]),
          result(){
              let res = this.data.filter(item => {
                  if (this.brand || this.category){
                      if (this.brand && this.category) return item.brand === this.brand && item.category === this.category;
                      else return item.brand === this.brand || item.category === this.category
                  } else if(!this.brand && !this.category) return this.data
              })
              return res;
          }
        },
        methods:{
            goToCard(id){
                this.$router.push({path:`/item/${id}`});
            }
        }
    }
</script>

<style scoped>
.catalog{
    padding: 10px;
    height: 90vh;
    justify-content: space-evenly;
    align-content: space-evenly;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>