// miniprogram/pages/zhuce/zhuce.js
Page({
data:{
  mobile:'',
  password:'',
  data:{}
},
mobile:function(e){
  this.setData({
    mobile:e.detail.value
  })
},
password: function (e) {
 this.setData({
     password: e.detail.value
   })
 },
tap:function(e){
  const db = wx.cloud.database();
  db.collection("woaihuangjunjie").add({
    data:{
      mobile:this.data.mobile,
      password:this.data.password
    },
    success:function(){
      wx.showToast({
        title:'注册成功'
      })
    }
  })
  wx.navigateTo({
    url: '../../resist/resist',
  })
},
})