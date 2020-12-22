exports.verifyToken = function(request, response, next){
    if(!request.body.token) {
        response.status(401);
        response.json({"message": "Unauthorized", "code": 401});
    } else {
        next();
    }
}