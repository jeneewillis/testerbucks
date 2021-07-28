import axios from 'axios'
import config from '../config/default.json'

const getTrim = async (year, make, model) => {
    try {
        let res = await axios({
            method: 'post',
            url: config.serverUrl + '/api/cars',
            data: {
                year: year,
                make: make,
                model: model
            }
        });
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export default getTrim
