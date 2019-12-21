Page({
  data: {
    inputText1: '',
    inputText2: '',
    inputText3: ''
  },
  onShow() {
    const self = this
    let userText = wx.getStorageSync('userText')
    if (userText) {
      self.data.inputText = userText
      self.setData(self.data)
    } // page载入的时候先读取一次，wx.getStorageSync('userText')里面有没有内容，有内容就填充，没有则什么也不做
  },
  onInputText(e) {
    const self = this
    const value = e.detail.value
    if (value) {
      wx.setStorageSync('userText', value)
    } // 监听用户输入的信息，一旦有内容输入进去，就会使用wx.setStorageSync('userText', value)设置usertext这个key的值，使用wx.getStorageSync('userText')可以得到usertext这个key的值
  },
  formSubmit: function (e) {
    var age = e.detail.value.age
    var ti = e.detail.value.ti
    var sex = e.detail.value.sex
    console.log(age, ti, sex)
  },
})



