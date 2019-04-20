const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/portal-api",proxy({
        target : "https://m.aihuishou.com",
        changeOrigin : true
    }))
}
//https://m.aihuishou.com/portal-api/home-tab?cityid=31&latitude=&longitude=
//https://m.aihuishou.com/portal-api/ofnew/home?cityId=31&longitude=&latitude=&inquiryKey=6565941809851836351&productId=