/**
 * Created by Administrator on 2017/10/23.
 * 根级别的 mutation
 */

import {ISLOGIN,GET_USERINFO} from './mutation-types'
export default {
    [ISLOGIN](){

    },
    [GET_USERINFO](state,info){
        /*登录账号不一致的时候*/
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };
        /*没有登录的时候*/
        if (!state.login) {
            return
        }
        /*如果没有获取到用户信息就还设置为null*/
        if(!info.message){
            state.userInfo = {...info};
        }else {
            state.userInfo = null;
        }
    },

}
