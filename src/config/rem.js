/**
 * Created by Administrator on 2017/10/17.
 */
(function (doc,win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window)
