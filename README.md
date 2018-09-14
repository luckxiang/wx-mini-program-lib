# wx-mini-program-lib
微信小程序导入的js库,由于项目比较简单,有些东西直接自己简单封装了一下,不想搞太复杂,现在有两个库

### 1.http 
自己对wx.request的封装,做了get和post,axios平时用习惯了,接口做了兼容,举个小栗子
```
const axios = require('../../libs/http/http')

http.get('Project/List', {
    baseURL: app.baseURL,
    headers: {
        'uid': app.authorization.uid,
        'token': app.authorization.access_token
    },
    params: {
        UserId: app.authorization.Id
    }
})
.then(function (res) {

})
.catch(function (error) {

})
})

``` 

### 2. runtime
支持异步处理,async await
