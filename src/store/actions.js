/**
 * 通过mutation间接更新state的多个方法的对象
 */
import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO
} 
from './mutation-type'

import {
    reqAddress,
    reqShops,
    reqFoodCategory,
    reqUserInfo,
    reqLogout
} 
from '../api'

export default{
    //异步获取地址
   async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash=state.latitude + ',' +state.longitude
        const result =await reqAddress(geohash)
        //提交一个mutation
        if(result.code===0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    //异步获取食品分类列表
    async getCategorys({commit}){
        //发送异步ajax请求
        const result=await reqFoodCategory()
        //提交一个mutation
        if(result.code===0){
            const categorys=result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },

    //异步获取商家列表
    async getShops({commit,state}){
        //发送ajax请求
        const {longitude,latitude} =state
        const result=await reqShops(longitude,latitude)
        //提交一个mutation
        if(result.code===0){
            const shops =result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },
    //同步获取用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    //异步获取用户信息
     async  getuserInfo({commit}){
        const result=await reqUserInfo()
        if(result.code===0){
            const userInfo=result.data
            commit(RECEIVE_USER_INFO,{userInfo})
        }
    },
    //异步退出
    async logout({commit}){
        const result =await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    }
}