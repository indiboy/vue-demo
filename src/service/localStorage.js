/**
 * Created by Administrator on 2017/12/21.
 */
/*获取缓存*/
export const getStorage = function () {
    if (!name) return;
    return window.localStorage.getItem(name);
}
/*添加缓存*/
export const setStorage = function (name,content) {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}
/*删除缓存*/
export const delStorage = function () {
    if (!name) return;
    window.localStorage.removeItem(name);
}
