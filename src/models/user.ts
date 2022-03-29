export interface User{
    id?:string,
    name?:string,
    surname?:string,
    patronymic?:string,
    email?:string
}

export interface UserToken{
    token?:string
}

export interface ReqParamsLogin{
    login?:string,
    password?:string
}

