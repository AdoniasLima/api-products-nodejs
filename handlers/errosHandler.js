exports.notFound = function(request, response, next){
    response.status(404);
    response.json({"message": "Not found", "code": 404});
}