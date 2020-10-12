import http from './http'
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUri,
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