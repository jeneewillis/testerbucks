import axios from 'axios'
import config from '../config/default.json'

const getModel = async (year, make) => {
    try {
        let res = await axios({
            method: 'post',
            url: config.serverUrl + '/api/cars',
            data: {
                year: year,
                make: make,
                model: ""
            }
        });
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export default getModel
