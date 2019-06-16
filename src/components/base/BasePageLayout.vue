<template lang='pug'>
    main
        slot
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'BasePageLayout',
        computed: {
            ...mapGetters({
                backgroundColor: 'getBackgroundColor'
            })
        }
    }
</script>

<style lang='stylus' scoped>
    main
        display flex
        flex-direction column
        justify-content center
</style>
