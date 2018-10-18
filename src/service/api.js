const request=require("./request").request
const config=require("./config.json")

let getExplist=async function(id){
    let response=await request(`get`,`${config.GET_EXPLIST}`,{
        id:id
    })
    console.log(response)

    return JSON.parse(JSON.stringify(response))
}
let hello=function(){
    return "a"
}
//用户登录
let Login=async (id,password) => {
    let response=await request('post',`${config.LOGIN}`,{
        id:id,
        password:password
    })
    return JSON.parse(JSON.stringify(response))
}
//根据输入的用户名返回用户权限
let getPower=async (type) => {
    let response=await request('get',`${config.GET_POWER}`,{
       type:type
    })
    return JSON.parse(JSON.stringify(response.data))
}

let sGetCourse=async (id) => {
    let response=await request('get',`${config.S_GET_COURSE}`,{
       id:id
    })
    // return JSON.parse(JSON.stringify(response.data))
    return response
}

let sGetExp=async (student_id,course_id) => {
    let response=await request('get',`${config.S_GET_EXP}`,{
        student_id:student_id,
        course_id:course_id
    })
    // return JSON.parse(JSON.stringify(response.data))
    return response
}

let setReport=async (student_id,exp_id,article) => {
    let response=await request('post',`${config.SET_REPORT}`,{
        student_id:student_id,
        exp_id:exp_id,
        article:article
    })
    return JSON.parse(JSON.stringify(response.data))
}

let tCourseDetail=async (class_id) => {
    let response=await request('get',`${config.T_GET_EXP}`,{
        class_id:class_id
    })
    console.log(response)
    // return JSON.parse(JSON.stringify(response.data))
    return response
}

let setGrade=async (student_id,exp_id,preview,action,report) => {
    let response=await request('post',`${config.SET_GRADE}`,{
        student_id:student_id,
        exp_id:exp_id,
        preview:preview,
        action:action,
        report:report
    })
    return JSON.parse(JSON.stringify(response.data))
}

let getReport=async (report_id) => {
    let response=await request('get',`${config.GET_REPORT}`,{
        report_id:report_id
    })
    return JSON.parse(JSON.stringify(response.data))
}

let tGetCourse=async (teacher_id) => {
    let response=await request('get',`${config.T_GET_COURSE}`,{
        teacher_id:teacher_id
    })
    // return JSON.parse(JSON.stringify(response.data))
    return response
}
let startExp=async (classroom_id,class_id, process) => {
    let response=await request('get',`${config.START_EXP}`,{
        classroom_id:classroom_id,
        class_id:class_id,
        process: process
    })
    // return JSON.parse(JSON.stringify(response.data))
    return response
}

export default {
    request:request,
    Login:Login,
    getPower:getPower,
    sGetCourse:sGetCourse,
    sGetExp:sGetExp,
    setReport:setReport,
    tGetExp:tCourseDetail,
    setGrade:setGrade,
    getReport:getReport,
    tGetCourse:tGetCourse,
    startExp:startExp,
    getExplist:getExplist,
    hello:hello
}