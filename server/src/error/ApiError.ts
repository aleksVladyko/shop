class ApiError extends Error {
    status: string | number;
    message: string;
    constructor(status: string | number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }
    static badRequest(message: string) {
        return new ApiError(404, message);
    }
    static internal(message: string) {
        return new ApiError(500, message);
    }
}
export default  ApiError;

