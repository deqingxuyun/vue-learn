<template>
  <div class="baseBox">
     {{boxName.name}}
  </div>
</template>

<script>
export default {
  name: 'baseBox',
  props:{
      boxName:Object,
  },
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
.baseBox{
    width: 100%;
    height: 100%;
    background-color: rgb(248, 190, 231)
}
</style>