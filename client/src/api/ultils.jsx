import axios from "axios";


const imgUplod = async image => {
    const formData = new FormData();
    formData.append('image', image);
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`, formData)
console.log(data);
    return data;
};

export default imgUplod;