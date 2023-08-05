<template>
    <!-- work with animations -->
    <div>
        <h1>work with animations</h1>
        <p>this is about component two.</p>

        <button @click="this.exist = !this.exist">{{ btnText }}</button>
        <Transition name="forP" mode="out-in" @after-enter="this.ifShow=true"	@after-leave="this.ifShow=false" @enter-cancelled="showMe">
            <p v-if="exist">Animated text</p>
        </Transition>
        <div style="background-color: blueviolet;" v-show="ifShow">enter</div>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                exist: false,
                ifShow: false
            }
        },
        computed: {
            btnText() {
                if(this.exist) return 'remove'
                else return 'add'
            }
        },
        methods: {
            showMe() {
                console.log('enter-cancelled')
            }
        }
    }
</script>
<style scoped>
    div {
        display: inline-block;
        background-color: lightpink;
    }
    button {
        display: block;
    }
    p:nth-of-type(2) {
        /* background-color: aquamarine; */
        padding: 10px;
        display: inline-block;
        transition: all 0.5s;
    }

    .forP-enter-from{
        opacity: 0;
        translate: 0 -100px;
    }
    .forP-enter-to{
        opacity: 1;
        translate: 0 0;
    }
    .forP-leave-from{
        opacity: 1;
        translate: 0 0;
    }
    .forP-leave-to{
        opacity: 0;
        translate: 0 +100px;
    }
    .forP-enter-active {
        background-color: lightgreen;
    }
    .forP-leave-active {
        background-color: lightcoral;
    }
</style>