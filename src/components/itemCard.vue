<template>
    <div class="item" @click="$emit('cardclick', item.id)">
        <h3>{{ item.name }}</h3>
        <h6>{{ item.category }}</h6>
        <h4>{{ item.brand }}</h4>
    </div>
</template>

<script>
    export default {
        name: "itemCard",
        props: ['item']
    }
</script>

<style scoped>
.item{
    cursor: pointer;
    min-width: 300px ;
    width: max-content;
    outline: 2px black solid;
}
</style>