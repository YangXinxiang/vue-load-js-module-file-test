const yuv1 = require('yuv-canvas') 
const yuv2 = require('../../lib/yuv-canvas.js') 
// const yuv3 = require('../../lib/yuv-canvas-file-from-install.js')  // yuv-canvas-file-from-install.js是从node_modules目录中找到拷贝出来的，直接这样用会报错，因为有依赖未拷贝出来
function startTestNodeEvn() {
    console.log('startTestNodeEvn :: enter.')
    console.log('startTestNodeEvn :: [from install env] yuv1 = ', yuv1)
    console.log('startTestNodeEvn :: ~~~~~~~~~~~~~~')
    console.log('startTestNodeEvn :: [from lib file] yuv2 = ', yuv2)
    console.log('startTestNodeEvn :: ~~~~~~~~~~~~~~')
    // console.log('startTestNodeEvn :: [from install file copy] yuv3 = ', yuv3)
}
startTestNodeEvn()