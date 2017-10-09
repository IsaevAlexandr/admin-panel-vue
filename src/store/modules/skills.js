const skills = {
    /* хранения данных */
    state: {
        /* объект для хранения данных */
        data: []
    },
    /* getter для обращения к стейту, а не на прямую, запрос данных */
    getters: {
        skills(state) {
            return state.data;
        }
    },
    mutations: {
        addNewSkill(state, skill) {
            state.data.push(skill);
        },
        removeSkillFromStore(state, id) {
            state.data = state.data.filter(skill => skill.id !== id)
        }
    },
    /* действия с данными */
    actions: {
        /* подтянуть скилы(с сервера) */

        /* деструктуризация */
        /* приходит этот же объект skills, только выбираются два метода */
        fetchSkills({ state, rootGetters }) {
            const { $http } = rootGetters; // тоже, что и rootGetters.$http. поскольку в rootGetters 1 объект .$http

            /* относительный путь не сработал '../../' */
            /* отправляем запрос методом get на указанный url */
            /* тело ответа кладем в хранилище state */
            /* метод вызывает компонент skill-list */
            $http.get('/src/components/About/data.json')
                .then(response => {
                    state.data = response.body;
                }, error => {
                    console.error(error);
                })
                //ajax
        }
    }
}



export default skills