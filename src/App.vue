<template>
  <div
    :style="{ 'min-height': `${screenHeight}px`, position: 'relative' }"
    class="container"
  >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateWallet: false,
      screenHeight: 0,
    };
  },
  mounted() {
    this.screenHeight = window.innerHeight;
    
    window.addEventListener("resize", this.updateScreenHeight);
  },
  methods: {
    updateScreenHeight() {
   
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenHeight);
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 550px;
  border-left: 1px solid #4f5a703d;
  border-right: 1px solid rgba(79, 90, 112, 0.24);

}
.dead {
      display: block;
    margin: 0 auto;
}
</style>
