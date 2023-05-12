<template>
  <div>
    <h4>보고 싶은 영화</h4>
    <form @submit.prevent="addWatchList">
        <input type="text" v-model.trim="title">
        <button type="submit" class='btn btn-sm' style="background-color: #D1D1D1;">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'WatchListForm',
    data() {
        return {
            title: null,
        }
    },
    methods: {
        addWatchList() {
            const title = this.title
            if (!title) {
                alert('영화 제목을 입력해주세요.')
                return
            }
            this.$store.dispatch('addWatchList', title)
            this.title = null
        }
    }
}
</script>

<style>

</style>