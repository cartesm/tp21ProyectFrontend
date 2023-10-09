import axios from 'axios';

axios.defaults.withCredentials = true;

export const laddLocation = async (data) => await axios.post("http://localhost:3000/add-location", data)

export const getCountryLocation = async (data) => await axios.get("http://localhost:3000/get-by-country", data)

export const getAllLocation = async () => await axios.get("http://localhost:3000/get-all-locations")

export const getOneLocation = async (data) => await axios.get(`http://localhost:3000/get-one/${data}`)



