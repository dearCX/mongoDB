var startTime = new Date().getTime()
var db = connect('company')
var rs = db.randomInfo.find({username:'smaqpyddmadd', randNum0:312114}).hint({randNum0:1})
rs.forEach(rs=>{printjson(rs)})  
var runTime = new Date().getTime() - startTime
print('[SUCCESS]This run time is:'+runTime+'ms')    //打印出运行时间
