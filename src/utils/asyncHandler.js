const asyncHandler = (requestHandler) => {
    (req , res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}



export {asyncHandler}

//const asyncHandler = () => {}
//const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async(req,res,next) => { //function made  call back function
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             status: 'error',
//             message: error.message
//         })
//     }
// }
