import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (data) => await axios.post("http://localhost:3000/login", data)

export const registerUser = async (data) => await axios.post("http://localhost:3000/register", data)

export const logoutUser = async () => await axios.post("http://localhost:3000/logout")

export const reportIssue = async (data) => await axios.post("http://localhost:3000/report",data)



