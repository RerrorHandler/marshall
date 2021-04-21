<template>
  <div id="nav">
  </div>
  <router-view />
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>

<style lang="scss">

html, body {
  margin: 0;
  padding: 0;
}

* {
  font-family: "GOTHIC";
  outline: none;
}
body {
  background-color: #ffdead;
}
footer {
  background-image: url("assets/footerbg.png");
  background-size: cover;
  height: 385px;
}
@font-face {
  font-family: "GOTHIC";
  src: local("GOTHIC"),
   url(assets/fonts/GOTHIC.TTF) format("truetype");
}
</style>
