import { useEffect, useState } from "react";

const codingQuizAPI = (category = "", difficulty = "") => {
    const [data, setData] = useState([]);
    useEffect(() => {( async () => {
            const API_KEY = "OcmNm6z2XBI1bXwDAc8XJHbhTbmGQwi0s8L7kV7r";
            try {
                const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category.toLowerCase()}&difficulty=${difficulty.toLowerCase()}&limit=20`);

                if (!response.ok)
                    setData(response.ok)
                console.log(response)
                const fetchedData = await response.json();
                setData(fetchedData);
            } catch (err) {
                console.log('::Error Fetch::', err); // Log the actual error
                
                setData('error')

            }
        })();

      
    }, [category, difficulty]);

    console.log(data)
    return data; // Optionally, you can return data if you want to use it outside the hook
};

export default codingQuizAPI;
