<template>
  <div class="col-4">
    <div class="card">
        <img v-bind:src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="card-img-top" alt="영화포스터">
        <div class="card-body" style="background-color:rgba(235, 235, 235, 0.2);">
            <h5 class="card-title" style="color: #8f1e73; font-weight: 600;">{{ movie.title }}</h5>
            <p class="card-text text-limit">{{ movie.overview }}</p>
  </div>
</div>
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movie: Object,
    }
}
</script>

<style>
.text-limit {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.4em;
    height: 5.5em;
}
</style>