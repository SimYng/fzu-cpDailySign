
/**
 * 判断当前时刻是否处于打卡的时间段内
 * 
 * @return bool
 */
function judgeTimeRange() {
    const timeRangeList = [[500, 820], [1100, 1400], [2100, 2230]]
    let now = new Date()
    let val = now.getHours() * 100 + now.getMinutes()

    for (const e of timeRangeList) {
        if(e[0] <= val && val <= e[1]){
            return true
        }
    } 

    return false
}

/**
 * 填充log数据表格
 * 
 * @param {array} data 
 */
function fillLogData(data){
    let dataArr = []
    for (const item of data) {
        const val = JSON.parse(item)
        dataArr.push({
            type: val.type,
            msg: val.msg,
            time: new Date(val.timeStamp * 1000).toLocaleString()
        })
    }
    return dataArr
}


exports.judgeTimeRange = judgeTimeRange
exports.fillLogData = fillLogData
