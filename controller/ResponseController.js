class ResponseController {
    responseOK(data, message) {
        return {
            message: message,
            data: data,
            status: 0
        }
    }
    responseERR(data, message) {
        return {
            message: message,
            data: data,
            status: 1
        }
    }
}

module.exports = new ResponseController;
