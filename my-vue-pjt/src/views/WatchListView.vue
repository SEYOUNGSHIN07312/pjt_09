<template>
  <div>
    <div class="headbox">
    <br>
    <h1>[ WatchList ]</h1>
    </div><hr>
    <WatchListForm/>
    <hr>
    <WatchListItem
    v-for="watchList in watchLists" :key="watchList.id" :watchList="watchList" />
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm.vue'
import WatchListItem from '@/components/WatchListItem.vue'

export default {
    name: 'WatchListView',
    components: {
        WatchListForm,
        WatchListItem
    },
    computed: {
        watchLists() {
            return this.$store.state.watchLists
        }
    },
}
</script>

<style>

</style>