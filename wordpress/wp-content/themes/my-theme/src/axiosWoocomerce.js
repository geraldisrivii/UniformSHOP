import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://legal-services.site/wp-json/wc/v3/',
    headers: { 'Authorization': 'Basic Y2tfY2EzMjdkNjY1NGUyNjUwOTljNjI3ODYyOWE3ODFmMzQ5ZmIwYmNlYTpjc19hNDQ0NDQyOTZiOTI1ODA2ZjhmMWMzM2I5N2RmNjJiMTA0NzhlM2Q2' }
});


export default instance
