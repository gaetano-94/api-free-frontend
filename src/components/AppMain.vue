<script>
import store from '../store';
import axios from 'axios';
export default {
  name: 'Main',
  data() {
    return {
      store,
      posts: [],
    };
  },
  methods: {
    allPost() {
      axios
        .get(this.store.postApi)
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.allPost();
  },
};
</script>

<template>
  <main>
    <div class="container d-flex justify-content-around mt-4 flex-wrap">
      <div class="card mb-4" v-for="post in posts" style="width: 18rem">
        <img :src="`/${post.image}`" class="img" :alt="post.title" />
        <h5 class="card-title mt-2">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.content }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 200px;
}
</style>
