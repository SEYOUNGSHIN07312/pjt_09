<template>
    <div>
        <div class="headbox">
        <br>
        <h1>[ Movies ]</h1>
        </div><hr>
        <div class="container">
            <div class="row">
               <MovieCard
                v-for="movie in movies" :key="movie.id" :movie="movie"/> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=386ea6e619bc3b5721f33392e34505c2&language=ko-KR'

export default {
    name: 'MovieView',
    components: {
        MovieCard
    },
    data() {
        return {
            movies : [],
        }
    },
    created() {
        this.getMovies()
    },
    methods: {
        getMovies() {
            axios({
                method:'get',
                url: API_URL
            })
            .then((response) => {
                console.log(response)
                this.movies = response.data.results
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>
.headbox {
    background-color: rgba(143, 30, 115, 0.6);
    padding-bottom: 18px;
    color: white;
}
</style>