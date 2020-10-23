import http from './http'
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUri,
    cityListUri,
    loginUrl,
    centerUrl,
    cinemaUrl,
    cinemaDetailUrl,
    cinemaDetailListUrl,

} from '../config/url'
//正在上映
export const nowPlayingListData = (pageNum) =>{
    http.defaults.headers.info = " ";
    http.defaults.headers.authorization = "";
    return http.get(nowPlayingListUri + pageNum)
}
//即将上映
export const comingSoonListData = (pageNum) =>{
    http.defaults.headers.info = " ";
    return http.get(comingSoonListUri + pageNum)
}
//电影详情
export const moiveDetailData = (filmId) =>{
    http.defaults.headers.info = "info";
    http.defaults.headers.authorization = "";
    return http.get(moiveDetailUri + filmId);
}

//影院列表
export const cinemaListData = ()=>{
    http.defaults.headers.info = "cinema";
    http.defaults.headers.authorization = "";
    return http.get(cinemaUrl)
}

//影院详情
export const cinemaDetailData = (cinemaId)=>{
    http.defaults.headers.info = "cinemaIds" ;
    http.defaults.headers.authorization = "";
    return http.get(cinemaDetailUrl +cinemaId)
}
//影院电影信息
export const cinemaDetailList = (cinemaId)=>{
    http.defaults.headers.info = "films";
    http.defaults.headers.authorization = "";
    return http.get(cinemaDetailListUrl + cinemaId )
}


//地址
export const cityListData = async ()=>{
    http.defaults.headers.info = "city";
    http.defaults.headers.authorization = "";

    let ret = await http.get(cityListUri)
    let cities = ret.data.data.cities
    let codeList = []   //存的26个字母
    let dataList = []   //城市列表
    let indexList = []  //存的22个字母

    for (let i = 65 ; i < 91; i++) {
        codeList.push(String.fromCharCode(i))
    }
    // console.log(codeList)

    codeList.forEach( (element)=>{
        let temArr = cities.filter(
            (item)=>  element.toLowerCase() == item.pinyin.substr(0,1)
            // console.log(temArr)
        );
        
        if(temArr.length > 0 ){
            indexList.push(element);
            dataList.push({
                index:element,
                data:temArr,
            })
        }
    })
    return Promise.resolve([dataList,indexList])
}
//登录
export const loginList = (data)=>{
    return http.post(loginUrl,data)
}

//获取用户登录
export const userInfo = (_token)=>{
    http.defaults.headers.authorization = _token;
    http.interceptors.response.use(function(response){
        response.data.user_info.gender = response.data.user_info.gender
            ? "女": "男";
        return response
    },
    function(error){
        // 错误的处理
    });

    return http.get(centerUrl)
}
