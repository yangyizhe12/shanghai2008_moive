import http from './http'
import {nowPlayingListUri,comingSoonListUri} from '../config/url'

export const nowPlayingListData = (page = 1) =>{
    return http.get(nowPlayingListUri + page)
}