export default {
    namespaced: true,
    state: {
        count: 1
    },
    getters: { // 类似于vue的computed计算属性
        getCount: state => {
            const { count } = state;
            return count + 1;
        }
    },
    mutations: {
        add (state, param) {
            state.count = state.count + param || 1;
        }
    },
    actions: {
        addFun (context, param) {
            context.commit('add', param);
        }
    }
}