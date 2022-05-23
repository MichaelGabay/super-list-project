import axios from "axios";

export const API_URL = "https://server-missions.herokuapp.com/missions";
export const TOKEN_NAME = "tickets_tok";

//for get method
export const doApiGet = async(_url) => {
  try{
    let resp = await axios.get(_url , {
      headers:{
        "x-api-key":localStorage[TOKEN_NAME],
        'content-type': "application/json"
      }
    })
    return resp.data;
  }
  catch(err){
    throw err;
  }
}

// For Post,delete, put, patch
export const doApiMethod = async(_url,_method,_body = {}) => {
  try{
    let resp = await axios({
      url:_url,
      method:_method,
      data:JSON.stringify(_body),
      headers:{
        "x-api-key":localStorage[TOKEN_NAME],
        'content-type': "application/json"
      }
    })
    return resp;
  }
  catch(err){
    throw err;
  }
}