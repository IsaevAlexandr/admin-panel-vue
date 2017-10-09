<template lang='pug'>
    .header
        .title Панель администрирования
        a(href='#').link Вернуться на сайт
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .header {
        display: flex;
        justify-content: center;
        vertical-align: middle;
        padding: 20px;
        background-color: $green;
    }
    .title {
        margin-right: auto;
        color: $white;
        font-family: Roboto;
        font-size: 28px;
        font-weight: 500;
    }
    .link {
        display: inline-block;
        color: $white;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        text-decoration: underline;
        vertical-align: middle;

        /* выравнивание по центру */
        &:before {
            content: "";
            display: inline-block;
            height: 100%;
            width: 0;
            vertical-align: middle;
        }
    }
</style>