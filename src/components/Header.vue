<template>
  <header>
    <div class="container">
      <img src="../assets/logo.svg" alt="CNPJ finder - logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
</script>



<style scoped>
header {
  width: 100%;
  height: 100px;

  background: var(--green-500);

  margin-bottom: 30px;
}

.container {
  max-width: 1120px;
  height: 100px;
  margin: 0 auto;

  padding: 0 10px;

  display: flex;
  align-items: center;
}

@media (max-width: 460px) {
    .container img {
        width: 100px;
    }
}
</style>