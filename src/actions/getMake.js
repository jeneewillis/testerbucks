import axios from 'axios'
import config from '../config/default.json'

const getMake = async (year) => {
    try {
        let res = await axios({
            method: 'post',
            url: config.serverUrl + '/api/cars',
            data: {
                year: year,
                make: "",
                model: ""
            }
        });
        let tempArray = res.data;
        tempArray.sort((a, b) => (a.make > b.make) ? 1 : -1);
        return tempArray;
    } catch (err) {
        console.log(err)
    }
}

export default getMake
