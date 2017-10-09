<template lang='pug'>
    tr
        td {{skill.name}}
        td
            input(type="number" step="5" min="0" max="100" :value='skill.percents')
        td %
        td
            button(
                type='button'
                @click='removeSkill(skill.id)'
            ) Удалить
        td
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            default: 'name'
        }
    },
    methods: {
        removeSkill(id){
            this.$emit('removeSkill',id);
        }
    }
}
</script>

<style lang='scss' scoped>
    
</style>