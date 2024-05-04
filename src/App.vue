<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateWallet: false,
    };
  },
};
</script>

<style scoped>
.container {
  height: 110vh;
  margin: 0 auto;
  max-width: 550px;
  border-left: 1px solid rgba(79, 90, 112, 0.24);
  border-right: 1px solid rgba(79, 90, 112, 0.24);
  padding: 1rem;
}
</style>
