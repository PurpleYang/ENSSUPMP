//index.js
var util = require('../../utils/util.js')
Page({
  data: {
    updateList: [{
      version: '1.0.1',
      date: '2020.02.18',
      updateItems: [
        '1.0.1版本',
        '此版本实现基本的查询功能，后续持续优化，看心情'
      ]
    },
      {
        version: '1.0.2',
        date: '2020.02.19',
        updateItems: [
          '1.0.2版本',
          '界面优化'
        ]
      }, 
      {
        version: '1.0.3',
        date: '2020.02.21',
        updateItems: [
          '1.0.3版本',
          '增加没啥用的筛选功能',
          '目前脚本支持信息统计截止于2020.2.18,更新频率暂定一周一次'
        ]
      }]
  },
  onLoad: function () {
  }
})
