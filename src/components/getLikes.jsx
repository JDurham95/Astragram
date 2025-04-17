import { useState } from "react";



const getLikes = async (index) => {



    const getCount = async() => {

        const response = await fetch(`/${index}`);
        const data = await response.json();

        return data;
        
    };
    
}

export default {getLikes}