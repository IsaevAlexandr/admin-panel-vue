<template lang='pug'>
    .tabs
        ul.list
            li.item(v-for='tab in tabs')
                //-переназначить встроенный активный класс 
                router-link(
                    :to='tab.href'
                    exact-active-class='active'
                ).link {{tab.name}}
</template>

<script>
export default {
    data(){
        return {
            /* свойство show отвечает за отобраение текущей вкладки */
            tabs: [
                {name:'Обо мне', href:'/'},
                {name:'Блог', href:'/blog'},
                {name:'Мои работы', href:'/my-works'}
            ]        }
    }
}
</script>

<style lang='scss' scoped>
    .list {
        display: flex;
        background-color: $begie;        
    } 
    .white {
        background-color: $white;
    }
    .item {
        border-right: 5px solid $white;
        width: 33%;
    }
    .link {
        display: block;
        color: $green;
        font-family: Roboto;
        font-size: 16px;        
        font-weight: 500;
        text-transform: uppercase;
        padding: 25px 70px;
        text-decoration: none;
        white-space: nowrap;
    }

    .active {
        background-color: $white;
    }
</style>