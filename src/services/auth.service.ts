import { ILoginDto } from "../types/login-user";
import {instance} from "../api/axios.api";
import { IRegisterDto } from "../types/register-user";

export const  AuthService={
    async login(userData:ILoginDto):Promise<string|undefined>{
        const {data}= await instance.post<string>('accounts/login', userData);
        return data;
    },
    async logout(){},
    async register(userData:IRegisterDto):Promise<string|undefined>{
        const {data}= await instance.post<string>('accounts/registration', userData);
        return data;
    },
}
