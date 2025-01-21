import ObjectComponent from "../components/form/ObjectComponent.jsx";
import {useEffect, useState} from "react";

function Home () {
    const [transformer, setTransformer] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchTransformer() {
            try {
                setIsLoading(true);
                const response = await fetch('http://145.24.223.84:8690/transformers', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data.items)
                setTransformer(data.items);
                setIsLoading(false);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchTransformer();
    }, []);



    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ObjectComponent transformer={transformer}/>
            )}
        </>

    );
}

export default Home;