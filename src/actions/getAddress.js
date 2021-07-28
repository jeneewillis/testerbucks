import axios from 'axios'
import config from '../config/default.json'

const getAddress = async(zip) => {
    try {
        let res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + config.gApiKey)
        if (res.data.status !== "OK") {
            return { status: false }
        } else {
            let country = res.data.results[0].address_components.filter(obj => {
                return obj.types.includes("country")
            })
            if (country[0].short_name !== "US") return { status: false }
            else {
                let state = res.data.results[0].address_components.filter(obj => {
                    return obj.types.includes("administrative_area_level_1")
                })
                let stateName = state[0].short_name;

                let city = res.data.results[0].address_components.filter(obj => {
                    return obj.types.includes("sublocality") || obj.types.includes("locality") || obj.types.includes("neighborhood")
                })
                let cityName = city[0].long_name;

                return {
                    status: true,
                    data: {
                        city: cityName,
                        state: stateName
                    }
                }
            }
        }
    } catch (err) {
        console.log(err)
        return { status: false }
    }
}

export default getAddress