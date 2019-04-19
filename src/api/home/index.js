import {http} from "../../utils/http"

export const getHomeTab = ()=>http("GET","/portal-api/home-tab?cityid=31&latitude=&longitude=");