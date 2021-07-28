import axios from 'axios'
import config from '../config/default.json'

const firstVisit = async () => {
    try {
        await axios({
            method: 'post',
            url: config.serverUrl + '/api/firstvisit',
            data: {
                userAgent: navigator.userAgent,
            }
        });
    } catch (err) {
        console.log(err)
    }
}

export default firstVisit
