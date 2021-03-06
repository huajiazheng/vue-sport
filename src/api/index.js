/**
 * Created by EKO-LKB on 2017/6/12.
 */
import axios from 'axios'

const BASE_URL = 'http://192.168.0.100:8080/'
const instance = axios.create({
  withCredentials: true
});
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use((config) => {
  if(config.method === 'post'){
    config.data = JSON.stringify(config.data)
  }
  return config;
})

export default{
  userLogin(data){
    return instance.post(BASE_URL + 'Auth/login', data)
  },
  userRegister(data){
    return instance.post(BASE_URL + 'Auth/register', data)
  },
  getLessonTypeList(token){
    return instance.post(BASE_URL + 'video/getVideoType/token/' + token)
  },
  getLessonList(token, data){
    return instance.post(BASE_URL + 'video/getVideoList/token/' + token, data)
  },
  getVideoList(token, videoId){
    return instance.post(BASE_URL + 'video/' + videoId + '/detail/token/' + token)
  },
  getCollectStatus(token, videoId){
    return instance.post(BASE_URL + 'videoCollection/' + videoId + '/isCollection/token/' + token)
  },
  collectLesson(token, videoId){
    return instance.post(BASE_URL + 'videoCollection/' + videoId + '/addCollection/token/' + token)
  },

  /*article*/
  getNewestList(token){
    return instance.post(BASE_URL + 'article/getNewestArticle/token/' + token)
  },
  getArticleTypeList(token){
    return instance.post(BASE_URL + 'article/getClassifyArticle/token/' + token)
  },
  getArticleContent(token, articleId){
    return instance.post(BASE_URL + 'article/' + articleId + '/detail/token/' + token)
  },
  getTotalComments(token, articleId){
    return instance.post(BASE_URL + 'article/' + articleId + '/getTotalComment/token/' + token)
  },
  getArticleComments(params, page){
    return instance.post(BASE_URL + 'article/' + params.articleId + '/getMessages/token/' + params.token, page)
  },
  getArticleList(token, page){
    return instance.post(BASE_URL + 'article/getList/token/' + token, page)
  },
  sendComment(token, params){
    return instance.post(BASE_URL + 'article/addComment/token/' + token, params)
  },

  /*mine*/
  getCollection(token){
    return instance.post(BASE_URL + 'videoCollection/getCollectionList/token/' + token)
  },
  getSignNum(token){
    return instance.post(BASE_URL + 'Auth/getSign/token/' + token)
  },
  sign(token){
    return instance.post(BASE_URL + 'Auth/sign/token/' + token)
  }
}
