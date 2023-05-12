<template>
  <div id="item">
    <label :class="{done: watchList.done}">{{ watchList.title }}</label>
    <input type="checkbox" v-model="watchList.done">
  </div>
</template>

<script>
export default {
    name: 'WatchListItem',
    props: {
        watchList: Object,
    }
}
</script>

<style>
label.done {
    text-decoration: line-through;
}
#item {
    background-color: rgba(235, 235, 235, 0.5);
    border-radius: 10px;
    margin: 5px 0;
    height: 50px;
    line-height: 3;
}
div input {
  accent-color: #8f1e73;
}
</style>