<template>
  <div>
    <div class="headbox">
    <br>
    <h1>[ Random ]</h1>
    </div><hr>
    <button type="submit" class="btn mb-3" style="background-color: #8f1e73; color: #FFFFFF;" @click="getRandomMovie">Pick</button>
    <div class='container'>
        <div class='row'>
            <div class="col-6 offset-3">
            <div class="card">
            <img v-bind:src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" class="card-img-top" alt="영화포스터">
            <div class="card-body" style="background-color:rgba(235, 235, 235, 0.2);">
                <h5 class="card-title" style="color: #8f1e73; font-weight: 600;">{{ movie.title }}</h5>
                <p class="card-text text-limit">{{ movie.overview }}</p>
            </div>
            </div>
        </div>     
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=386ea6e619bc3b5721f33392e34505c2&language=ko-KR'

export default {
    name: 'RandomView',
    data() {
        return {
            movie: {},
        }
    },
    created() {
        this.getRandomMovie()
    },
    methods: {
        getRandomMovie() {
            axios({
                method: 'get',
                url: API_URL
            })
            .then((response) => {
                const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)]
                this.movie = randomMovie
                console.log(randomMovie)
            })
            .catch((error) => {
                console.log(error)
            })
        }
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