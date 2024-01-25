import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:81/wp-json/wp/v2',
    headers: { 'Authorization': 'Basic YWxleGFuZGVyLmZyZWVsYW5jZXI6b1NBOSB5TFRWIHlHYWIgTGprTCA3aDBpIGxoTnE=' }
});


export default instance
