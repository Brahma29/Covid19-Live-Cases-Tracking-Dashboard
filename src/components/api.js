import axios from 'axios';

const url = "https://corona.lmao.ninja/v2";

//Fetching API if country name is passed.
export const fetchData = async (country)=>{
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`; 
    }
    else{
        changedUrl = `${url}/all`
    }
    try {
        const {data} = await axios.get(changedUrl);
        return data;
    } catch (error) {
        return {"message" : "Country not found."};
    }
}

export const fetchCountries = async ()=>{
    try {
        const {data} = await axios.get(`${url}/countries`);
        return data;
    } catch (error) {
        return error;
    }
}