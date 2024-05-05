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
    // При монтировании компонента вычисляем высоту экрана
    this.screenHeight = window.innerHeight;
    // Или можно использовать jQuery, если он доступен в вашем проекте
    // this.screenHeight = $(window).height();

    // Также можно добавить обработчик события изменения размера окна, чтобы обновлять высоту при изменении размера экрана
    window.addEventListener("resize", this.updateScreenHeight);
  },
  methods: {
    updateScreenHeight() {
      this.screenHeight = window.innerHeight;
      // Или с jQuery
      // this.screenHeight = $(window).height();
    },
  },
  beforeDestroy() {
    // Удалите обработчик события изменения размера окна перед разрушением компонента, чтобы избежать утечек памяти
    window.removeEventListener("resize", this.updateScreenHeight);
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 550px;
  border-left: 1px solid #4f5a703d;
  border-right: 1px solid rgba(79, 90, 112, 0.24);
  padding: 1rem;
}
</style>
