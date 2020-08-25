// from examples 19 and 20 

import axios from "axios"

export default {
    getUsers(){
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}