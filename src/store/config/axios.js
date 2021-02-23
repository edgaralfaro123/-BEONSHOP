import axios from "axios";

const preguntaAxios = axios.create({
  baseURL: "http://localhost:3000/",
});
export default preguntaAxios;