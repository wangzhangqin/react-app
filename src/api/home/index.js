import {http} from "../../utils/http"

export const getHomeTab = ()=>http("GET","/portal-api/home-tab?cityid=31&latitude=&longitude=");
export const getNewphone = ()=>http("GET","/portal-api/ofnew/home?cityId=31&longitude=&latitude=&inquiryKey=6565941809851836351&productId=");
