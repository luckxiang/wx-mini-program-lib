export function get (url, config) {
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: config.baseURL + url,
      header: config.headers,
      data: config.params,
      method: 'GET',
      success: function (res) {
        resolve(res)
      },
      error: function (e) {
        reject(e)
      }
    })
  })
  return promise
}

export function post(url, config) {
  let promise = new Promise((resolve, reject) => {
    wx.request({
      url: config.baseURL + url,
      header: config.headers,
      data: config.data,
      method: 'POST',
      success: function (res) {
        resolve(res)
      },
      error: function (e) {
        reject(e)
      }
    })
  })
  return promise
}