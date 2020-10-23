//电影列表
export const nowPlayingListUri =
    "/gateway?cityId=310100&pageSize=10&type=1&k=7579753&pageNum=";
// 即将上映
export const comingSoonListUri =
    "/gateway?cityId=310100&pageSize=30&type=2&k=5155219&pageNum=";

//电影详情页面
export const moiveDetailUri    = "/gateway?k=4691730&filmId=";

//城市列表
export const cityListUri       = "/gateway?k=2289937";

//登录接口
export const loginUrl          = "http://127.0.0.1:3000/api/v1/login";
//用户登录接口
export const centerUrl         = "http://127.0.0.1:3000/api/v1/user_info"

//影院列表
export const cinemaUrl         = "/gateway?cityId=310100&k=2169536&ticketFlag=1"

//影院详情列表
export const cinemaDetailUrl   = "/gateway?k=4877586&cinemaId="                                                            

//影院详情电影信息
export const cinemaDetailListUrl = "/gateway?k=4935554&cinemaId="