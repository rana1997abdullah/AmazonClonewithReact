import axios from "axios";

export default axios.create({
    baseURL: "https://finalreactecommerce-default-rtdb.asia-southeast1.firebasedatabase.app"
})