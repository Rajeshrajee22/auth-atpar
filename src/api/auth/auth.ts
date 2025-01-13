import axios from "axios";
import { client } from "./client";


interface LoginTypes {
    username : string,
    password : string
}

export const loginUser = async(values : LoginTypes) => {
    const response = await client( {
        method : "POST",
        url: "auth/token",
        data: {
            username: values.username,
            password: values.password
        }
    })

    return response
};

