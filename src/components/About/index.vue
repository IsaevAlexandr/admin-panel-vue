<template lang='pug'>
    .about
        h1.title Страница «Обо мне»
        .skills-list(v-for='(skillsType, index) in skillsTypes')
            skills-list(
                :skills='skills'
                :skillsType='skillsType'
                :key='index'
                @addNewSkill='addSkill'
                @removeSkill='removeSkill'
            )        
</template>

<script>
import skillsList from './skill-list'

/* импортируем функии обертки, что бы не писать каждый раз */
/* this.$store.dispatch('fetchSkills') */
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data(){
        return {
            skillsTypes: ['Frontend','Workflow','Backend']
        }
    },
    computed: {
        /* понструкция работает, как если бы мы переносили по одной функцию из getters хранилища skills */
        /* передается массив тех геттеров, которые хотим получить */
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions(['fetchSkills']),
        ...mapMutations(['addNewSkill','removeSkillFromStore']),
        addSkill(skill){
            /* вызов мутаии, которая изменяет state */
            this.addNewSkill(skill);
        },
        removeSkill(id){
            this.removeSkillFromStore(id)
        }

        /* если есть база данных */
        /* по методу addNewSkill action, который отправляет запрос в базу данных*/
    },
    components: {
        skillsList
    },
    created(){
        /* вызвать метод из хранилища './store/modules/skills.js' */
        /* например запросить данные с сервера */
        // this.$store.dispatch('fetchSkills')

        /* отращение в объекту хранилища */
        // console.log(this.$store.getters);

        /* после примешивание методов mapActions и mapGetters можно так запрашивать данные */
        this.fetchSkills();//перерь можно обращаться в данным как {{skills[0].name}}
    }
}
</script>

<style lang='scss' scoped>
    
</style>