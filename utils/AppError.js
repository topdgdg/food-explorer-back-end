class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.startusCode = statusCode;
    }
}

module.exports = AppError;