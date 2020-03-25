<template>
    <div class="container flex-ccc">
        <div class="flex-rcc">
            <button class="btn" type="button" @click="addFunc">+</button>
            <button class="btn-1" type="button" @click="gotoOther">go</button>
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
        },
        gotoOther () {
            this.$router.goRight('/test');
        }
    }
}
</script>
<style lang="less" scoped>
@import '../assets/common.less';

.container {
    height: 100%;
    margin: 0;
    border: 1px #000 solid;

    .btn {
        padding: .15rem;
        font-size: .26rem;
        background-color: whitesmoke;
    }

    .btn-1 {
        padding: .15rem;
        margin-left: .2rem;
        font-size: .26rem;
        background-color: whitesmoke;
    }
}
</style>