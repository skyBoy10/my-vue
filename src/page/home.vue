<template>
    <div class="flex-ccc">
        <div class="flex-rcc">
            <button type="button" @click="addFunc">+</button>
        </div>
        <div>
            <div>store的count：{{ this.num }}</div>
            <div>store的getter的值：{{ this.getNum }}</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Welcome to Vue'
        };
    },
    created () {
        console.log(this.$store);
    },
    computed: {
        ...mapState('homeModel', {
            num: (state) => state.count
        }),
        ...mapGetters('homeModel', {
            getNum: 'getCount'
        })
    },
    methods: {
        addFunc () {
            this.$store.dispatch('homeModel/addFun', 1);
        }
    }
}
</script>
<style scoped>
    @import '../assets/common.less';
</style>>