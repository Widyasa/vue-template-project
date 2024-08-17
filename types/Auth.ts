export interface Auth {
    success : string
    data : {
        data : {
            token : string
            name : string
        }
    }
    message: string
}