const response = {
    success : (res,data,message)=>{
        const response ={
            success : true,
            data : data,
            code : 200,
            message : message
        }
        res.json(response)
    },
    failed : (res,code,err)=>{
        if(code === 500){
            const response ={
                success : false,
                data : null,
                code : code,
                error : err,
                message : 'There was an error on the server and the request could not be completed'
            }
            res.json(response)
        }
        else if(code === 404){
            const response ={
                success : false,
                data : null,
                code : code,
                error: err,
                message : 'The requested resource was not found'
            }
            res.json(response)
        }else if(code === 401){
            const response ={
                success : false,
                data : null,
                code : code,
                error: err,
                message : 'Unauthorized'
            }
            res.json(response)
        }
    }
}
module.exports= response