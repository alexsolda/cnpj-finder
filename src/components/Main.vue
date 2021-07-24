<template>
  <main class="container">
    <div class="search--area">
      <h2 class="search--area_title">Digite o CNPJ:</h2>
      <input
        class="search--area_input"
        type="text"
        v-mask="'##.###.###/####-##'"
        v-model="cnpj"
      />
      <button
        :disabled='loading'
        v-on:click="searchCNPJ"
        type="button"
        class="search--area_button"
      >
        {{ !loading ? "Pesquisar" : "" }}
        <font-awesome-icon
          v-if="loading"
          :icon="['fas', 'spinner']"
          color="#FFFFFF"
        />
      </button>
    </div>

    <CNPJInfos v-if="cnpjResponse !== ''" :data="cnpjResponse" />
    <ErrorMsg v-if="errorMsg" />
  </main>
</template>

<script>
import CNPJInfos from "./CNPJInfos";
import ErrorMsg from "./ErrorMsg";
import api from "../services/api";

export default {
  name: "Main",
  components: {
    CNPJInfos,
    ErrorMsg,
  },
  data() {
    return {
      cnpj: "",
      cnpjResponse: "",
      errorMsg: false,
      loading: false,
    };
  },

  methods: {
    async searchCNPJ() {
      this.errorMsg = false;

      const cnpjFormatted = this.cnpj
        .replace(".", "")
        .replace(".", "")
        .replace("/", "")
        .replace("-", ""); //remove os caracteres especiais

      if (cnpjFormatted.toString().length < 14) {
        this.errorMsg = true;
        return;
      }

      try {
        this.loading = true;
        await api
          .get(cnpjFormatted)
          .then(
            (response) =>
              (this.cnpjResponse = { ...response.data, cnpj_number: this.cnpj })
          );
        this.cnpj = "";
      } catch {
        this.cnpjResponse = '';
        this.errorMsg = true;
      }

      this.loading = false;
    },
  },
};
</script>



<style scoped>
@keyframes animatedLoading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search--area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  flex: 1;

  margin-bottom: 50px;
}

.search--area_title {
  text-align: center;
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--green-900);
}

.search--area_input {
  border: 2px solid transparent;
  border-radius: 10px;

  font-size: 3rem;
  font-weight: 700;
  color: var(--green-900);

  text-align: center;

  max-width: 632px;
  width: 100%;
  height: 95px;

  margin: 0 auto;

  padding: 0 10px;

  outline: var(--green-500);

  transition: border 0.6s;
}

.search--area_input:hover {
  border: 2px solid var(--green-500);
}

.search--area_input:focus {
  border: 2px solid var(--green-500);
}

.search--area_button {
  max-width: 350px;
  width: 100%;
  height: 73px;

  border: none;
  border-radius: 10px;

  background: var(--green-500);
  color: var(--white);

  font-size: 1.75rem;
  font-weight: 400;

  margin: 0 auto;
}

.search--area_button svg {
  animation: animatedLoading 1s infinite;
}

@media (max-width: 460px) {
  .search--area_input {

  font-size: 2rem;
  
  height: 70px;
}

.search--area_button {
  height: 60px;

  font-size: 1.5rem;
}
}

</style>