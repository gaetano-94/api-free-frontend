import { reactive } from 'vue';

const store = reactive({
  postApi: 'http://localhost:3000/api/posts',
});

export default store;
