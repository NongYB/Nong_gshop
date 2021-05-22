/**
 * 包含n个接口请求函数的模块
 * 函数的返回值：promise对象
 */
import ajax from './ajax'


const BASE_URL='/api'
//  1、根据经纬度获取位置详情
 const reqAddress=(geohash)=>ajax(`${BASE_URL}/position/${geohash}`)
//  2、获取食品分类列表
 const reqFoodCategory=()=>ajax(BASE_URL+'/index_category')
//  3、根据经纬度获取商铺列表
 const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude,latitude})
//  4、根据经纬度和关键字搜索商铺列表
 const reqSearchShops=(geohash,keyword)=>ajax(BASE_URL+'/search_shops',{geohash,keyword})
//  5、获取一次性验证码
//  const reqCaptcha=()=>ajax('/captcha')
//  6、用户名密码登陆
 const reqPwdLogin=({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
//  7、发送短信验证码
 const reqSendCode=(phone)=>ajax(BASE_URL+'/sendcode',{phone})
//  8、手机号验证码登陆
 const reqSmsLogin=(phone,code)=>ajax(BASE_URL+'/login_sms',{phone,code},'POST')
//  9、根据会话获取用户信息
 const reqUserInfo=()=>ajax(BASE_URL+'/userinfo')
//  10、用户登出
 const reqLogout=()=>ajax(BASE_URL+'/logout')

//获取商家信息
 const reqShopInfo=()=>ajax('/info')

 //获取商家评论数组
 const reqShopRatings=()=>ajax('/ratings')

 //获取商家商品数组
 const reqShopGoods=()=>ajax('/goods')


export{
    reqAddress,
    reqFoodCategory,
    reqShops,
    reqSearchShops,
    //reqCaptcha,
    reqPwdLogin,
    reqSendCode,
    reqSmsLogin,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods

}