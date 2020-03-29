const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
    const token = request.headers['x-access-token']
        || request.body.token
        || request.query.token;

    if (token) {
        jwt.verify(token, request.app.get('api_secret_key'), (err, decodedData) => {
            if (err)
                response.json({
                    status: false,
                    message: "Böyle bir token bulunamadı!!"
                })
            else{
                request.decode = decodedData; // token da ki dataları içerir.
                console.log(decodedData);
                next();
            }
        })
    } else {
        response.json({
            status: false,
            message: "Token alınamadı!!"
        })
    }
}