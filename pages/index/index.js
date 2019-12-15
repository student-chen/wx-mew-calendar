Page({

    data: {
        value: '2019-12-14',
        week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        lastMonth: 'lastMonth',
        nextMonth:'nextMonth',
        selectVal: ''
    },

    //组件监听事件
    select(e) {
        // console.log(e)
        this.setData({
            selectVal:e.detail
        })
    },

    toggleType(){
        this.selectComponent('#Calendar').toggleType();
    }


})