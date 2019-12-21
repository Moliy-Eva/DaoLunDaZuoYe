// miniprogram/resist/resist.js
Page({
  data:{
    usersinformation:[],
    mobilenumber:'',
    password:''
  },
resist:function(){
  wx.navigateTo({
    url: '../pages/zhuce/zhuce',
  })
},
mobile:function(e){
this.setData({
  mobilenumber:e.detail.value,
})
},
password: function (e) {
    this.setData({
      password: e.detail.value,
    })
  },
tap:function(){
const db = wx.cloud.database();
db.collection('woaihuangjunjie')
.get({
  success:res=>{
    this.setData({
      usersinformation:res.data
    })
    var i = 0;
    for(i=0;i<this.data.usersinformation.length;i++)
      if (this.data.password == this.data.usersinformation[i].password && this.data.mobilenumber == this.data.usersinformation[i].mobile)
      {
        wx.navigateTo({
          url: '../pages/index/index',
        });
        wx.showToast({
          title: "登录成功",
          icon: "none"
        });
        return true;
      }
      else{
        wx.showToast({
          title:"密码错误",
          icon:"none"
        });
      }
  }
})
}
  
})