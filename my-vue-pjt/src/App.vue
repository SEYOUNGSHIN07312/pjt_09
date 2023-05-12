<template>
  <div id="app">
    <div class="navbox">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name : 'MovieView'}">Movies</router-link> |
      <router-link :to="{name : 'RandomView'}">Random</router-link> |
      <router-link :to="{name: 'WatchListView'}">WatchList</router-link>
    </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbox {
  background-color: rgb(209, 209, 209);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #8f1e73;
}
</style>
