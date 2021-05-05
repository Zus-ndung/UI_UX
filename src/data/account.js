import {ROLE} from "../constant/role";
const data = [
    {
        email: "dung.nv.soict@gmail.com",
        password: "123456789",
        role: ROLE.WORKER
    },
    {
        email: "admin@gmail.com",
        password: "admin",
        role: ROLE.ADMIN
    },
]

const LoginFake = (payload) => {
    const {email, password} = payload;
    const index = data.findIndex(item => item.email === email && item.password === password);
    if(index > -1 ){
        return [true, data[index].role];
    }else{
        return [false, null]
    }
}
export const UserApiFake = {
    LoginFake   
}