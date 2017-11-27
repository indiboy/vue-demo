/**
 * Created by Administrator on 2017/11/14.
 */
import md5 from 'js-md5'
const sessionKey = '689d3783957d65d57229ba3dc70a20fb'

export function apdmd5(arr){
    var arr = arr || [];
    var str =  arr.join('')+sessionKey;
    return md5(str);
}
