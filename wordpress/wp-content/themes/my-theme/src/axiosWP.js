import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://legal-services.site/wp-json/wp/v2',
    headers: { 'Authorization': 'Basic YWxleGFuZGVyLmZyZWVsYW5jZXI6b1NBOSB5TFRWIHlHYWIgTGprTCA3aDBpIGxoTnE=' }
});


export default instance
