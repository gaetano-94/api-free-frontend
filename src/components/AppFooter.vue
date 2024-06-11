<script>
export default {
  name: 'Footer',
};
</script>

<template>
  <footer class="bg-footer">
    <div class="container py-3">
      <div class="d-flex justify-content-between">
        <div>
          <a href="#">Logo</a>
        </div>
        <div>
          <a href="#">Menu</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.bg-footer {
  background-color: #0b1a29;
  width: 100%;

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
}
</style>
