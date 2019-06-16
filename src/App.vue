<template lang='pug'>
    #app
        BasePageLayout
            router-view
</template>

<script>
    // The main APP entrypoint
    export default {
        mounted () {
            console.info('App version ' + this.$store.getters.appVersion)
        }
    }
</script>

<style lang='stylus'>

    html
        height 100%
        box-sizing border-box
    *
        margin 0
        padding 0

    * *:before *:after
        box-sizing border-box

    body,html,#app
        min-height 100%

    @import url('https://fonts.googleapis.com/css?family=Raleway')

    //Common colors and stuff
    @import './assets/styles/variables.styl'

    body
        font-family 'Raleway', sans-serif
    #app
        background var(--main-bg-color)
        color var(--main-color)

</style>
