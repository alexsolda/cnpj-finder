<template>
  <div class='cards--content'>
    <h3 class="info--title">{{data.name}}</h3>
    <div class="cards--info">
      <div class="card--info">
        <font-awesome-icon :icon="['fas', 'file-alt']" color="#57DDAD" />
        <p class="card--info__title">CNPJ:</p>
        <span class="card--info__data">{{data.cnpj_number}}</span>
      </div>
      <div class="card--info">
        <font-awesome-icon :icon="['fas', 'phone-alt']" color="#57DDAD" />
        <p class="card--info__title">Telefone:</p>
        <span class="card--info__data">{{data.phone}}</span>
      </div>
      <div class="card--info">
        <font-awesome-icon :icon="['fas', 'chart-line']" color="#57DDAD" />
        <p class="card--info__title">Situação:</p>
        <span class="card--info__data">{{data.registration.status}}</span>
      </div>
      <div class="card--info">
        <font-awesome-icon :icon="['fas', 'calendar-alt']" color="#57DDAD" />
        <p class="card--info__title">Data sit.:</p>
        <span class="card--info__data">{{data.registration.status_date}}</span>
      </div>
    </div>

    <div class="data--rows">
      <div class="data--row">
        <p>
          <span class="data--row__title">Nome fantasia:</span>
          {{data.alias}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Atividade:</span>
          {{data.primary_activity.code}} - {{data.primary_activity.description}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Cidade/UF:</span>
          {{data.address.city}}/{{data.address.state}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Endereço:</span>
          {{data.address.street}},  {{data.address.number}} - {{data.address.neighborhood}} / CEP: {{data.address.zip}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Porte:</span>
          {{data.size}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Simples nacional:</span>
          {{data.simples_nacional.simples_optant ? 'Sim' : 'Não'}}
        </p>
      </div>

      <div class="data--row">
        <p>
          <span class="data--row__title">Tipo:</span>
          {{data.type}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CNPJInfos",
  components: {},
  props: {
    data: {},
  }
};
</script>


<style scoped>

@keyframes animatedData {
  from {
    opacity: 0;
  }
  to {
     opacity: 1;
  }
}

.cards--content {
  animation: animatedData 1s linear;

  margin-bottom: 50px;
}

.info--title {
  font-size: 1.875rem;
  font-weight: 900;
  color: var(--green-900);

  text-align: center;

  margin-bottom: 20px;
}

.cards--info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  margin-bottom: 40px;
}

.card--info {
  background: var(--white);

  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card--info__title {
  color: var(--green-500);

  font-size: 1rem;
  font-weight: 400;
}

.card--info__data {
  font-size: 1rem;
  font-weight: 700;

  color: var(--green-900);
}

.data--rows {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.data--row {
    display: flex;
    align-items: center;

    border-radius: 5px;

    min-height: 50px;
    padding: 10px 10px;

    text-align: left;

    background: var(--white);

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.data--row p {
    color: var(--green-900);
}

.data--row__title {
    color: var(--green-500);
}

@media (max-width: 1167px) {
  .cards--info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  margin-bottom: 40px;
}

.data--row p {
    display: flex;
    flex-direction: column;
}

}

@media (max-width: 460px) {
  .card--info__title {

  font-size: .75rem;
}
}

</style>