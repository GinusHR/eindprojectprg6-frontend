import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";

function Detail () {
    const {id} = useParams();
    const [transformer, setTransformer] = useState();


    useEffect(() => {
        const getTransformer = async () => {
            try {
                const response = await fetch('http://145.24.223.84:8880/transformers/' + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }

                });
                const data = await response.json();
                console.log(data);
                setTransformer(data);
            } catch (error) {
                console.error('Fout bij het ophalen van de note:', error);

            }
        }
        getTransformer();
    }, [id]);

    if (!transformer) {
        return (
            <h1>No note found</h1>
        );
    }

    return(
        <div className="flex flex-row flex-wrap w-9/12 min-h-[30vh] justify-center">
                <article key={transformer.id} className="w-1/3 m-2 rounded-lg p-3">
                    <h2 className="text-2xl">{transformer.name}</h2>
                    <h3 className="text-cyan-600 text-xl">{transformer.faction}</h3>
                    <p className="text-black text-lg p-3 bg-gray-300 rounded-md mb-2">{transformer.description}</p>
                    <Link className="textLink" to={`/edit/${transformer.id}`}>Edit</Link>
                </article>
        </div>
    );
}


export default Detail;