/**
 * Created by Administrator on 2017/10/23.
 * 根级别的 action
 */

import {getUser} from '../service/getData'
import {GET_USERINFO} from './mutation-types'

export default {
    async getUserInfo({commit}) {
        let res = await getUser();
        commit(GET_USERINFO, res)
    },
}
