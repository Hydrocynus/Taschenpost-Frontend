<template>
  <div class="header">
    <button id="back" @click="$router.go(-1)"><i class="fa-solid fa-chevron-left"></i></button>
    <h1>Taschenpost</h1>
    <router-link :to="{name: 'user'}"><i class="fa-solid fa-user"></i></router-link>
  </div>
  <router-view></router-view>
  <nav>

  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
