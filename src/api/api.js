// import { Article } from "@mui/icons-material"
import axiosFetch from "../Axios"

export const RegisterUser = (userData, setData, setError) => {
  axiosFetch()
    .post("/users", userData)
    .then((response) => {
      console.log(response)
      setData(response)
    })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
}

export const LoginUser = (userData, setData, setError) => {
  axiosFetch()
    .post("users/authenticate", userData)
    .then((response) => {
      console.log(response.data)
      setData(response)
      // console.log(response.status)
    })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
}

export const CreateArticle = (ArticleData) => {
  axiosFetch()
    .post("/articles", ArticleData)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const GetArticleMany = (setLoading) => {
  setLoading(true)
  axiosFetch()
    .get("/articles")
    .then((response) => {
      console.log(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
}

export const CreateComment = (CommentData, setLoading) => {
  setLoading(true)
  axiosFetch()
    .post("calc/loans/create/", CommentData)
    .then((response) => {
      console.log(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
}

export const GetComment = (setData) => {
  axiosFetch()
    .get("calc/loanproducts/")
    .then((response) => {
      console.log(response.data)
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
      setData(error)
    })
}
