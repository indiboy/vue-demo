/**
 * Created by Administrator on 2017/12/20.
 * 使用axios统一获取接口数据
 */
import $ajax from './api'

/*热门城市*/
export const hotcity = function () {
    return $ajax.get('/v1/cities',{
        type:'hot'
    })
}

/*当前城市*/
export const cityGuess = function () {
    return $ajax.get('/v1/cities',{
        type: 'guess'
    })
}

/*所有城市*/
export const groupcity = function () {
    return $ajax.get('/v1/cities',{
        type: 'group'
    })
}
