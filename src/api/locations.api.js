import axios from 'axios'

export const laddLocation = async (data) => await axios.post("http://localhost:3000/add-location", data)

export const getCountryLocation = async (data) => await axios.post("http://localhost:3000/get-by-country", data)

export const getAllLocation = async (data) => await axios.post("http://localhost:3000/get-all-locations", data)


