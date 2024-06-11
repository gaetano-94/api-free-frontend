<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header class="bg-header">
    <div class="container py-3">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <a href="#">Logo</a>
        </div>
        <div class="d-flex">
          <div class="pe-3">
            <a href="#">Post</a>
          </div>
          <div>
            <a href="#">Add Post</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.bg-header {
  background-color: #0b1a29;
  width: 100%;

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
}
</style>
