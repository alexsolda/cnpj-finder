<template>
    <div class='error--msg'>
        <span>Ops! CNPJ informado inválido.</span>
        <img src='../assets/error.svg' alt='Erro - Ilustração de uma pessoa em frente ao computador com uma mensagem de erro' />
    </div>
</template>

<script>

export default {
    name: 'ErrorMsg'
}

</script>

<style>

.error--msg {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    margin-top: 30px;
}

.error--msg span {
    color: var(--green-500);
    font-size: 2rem;
    text-align: center;
}

.error--msg img {
    max-width: 300px;
}

</style>