import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.cnpja.com.br/companies/',
    headers: {
        authorization: '1f4c304d-7d86-4774-8087-d56597003fd9-07691491-46c4-4e8c-ac71-c73330d7ed40'
    }
});

export default api;