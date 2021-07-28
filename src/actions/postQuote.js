import axios from 'axios'
import config from '../config/default.json'

const postQuote = async (data) => {
    try {
        let res = await axios({
            method: 'post',
            url: config.serverUrl + '/api/quotes',
            data: data
        });
        return (res.data.msg === "SUCCESS") ? true : false
    } catch (err) {
        console.log(err)
        return false;
    }
}

export default postQuote
