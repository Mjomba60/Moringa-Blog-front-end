import axios from "axios"
// import Cookies from "js-cookie"

const axiosFetch = () => {
  let headers = {
    "X-Requested-With": "XMLHttpRequest",
  }

  const axiosInstance = axios.create({
    baseURL: "http://localhost:9292",
    headers: headers,
  })
  axiosInstance.defaults.headers.common.accept = "application/json"
  return axiosInstance
}

export default axiosFetch
