import http from './http'
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUri,
    cityListUri,
} from '../config/url'

export const nowPlayingListData = (pageNum) =>{
    http.defaults.headers.info = " ";
    return http.get(nowPlayingListUri + pageNum)
}

export const comingSoonListData = (pageNum) =>{
    http.defaults.headers.info = " ";
    return http.get(comingSoonListUri + pageNum)
}

export const moiveDetailData = (filmId) =>{
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUri + filmId);
}

export const cityListData = async ()=>{
    http.defaults.headers.info = "city";

    let ret = await http.get(cityListUri)
    let cities = ret.data.data.cities
    let codeList = []   //存的26个字母
    let dataList = []
    let indexList = []

    for (let i = 65 ; i < 91; i++) {
        codeList.push(String.fromCharCode(i))
    }
    console.log(codeList)

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