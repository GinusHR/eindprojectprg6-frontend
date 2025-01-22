import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import DeleteButton from "../components/DeleteButton.jsx";

function Transformers() {
    const {id} = useParams()
    const [transformer, setTransformer] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        async function getTransformer() {
            try {
                const response = await fetch('http://145.24.223.84:8690/transformers/' + id, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                const data = await response.json();
                console.log(data)
                setTransformer(data);
            } catch (error) {
                console.error('Fout bij het ophalen van de note:', error);
            }
        }

        getTransformer();
    }, [id]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setTransformer({
            ...transformer,
            [name]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://145.24.223.84:8690/transformers/' + id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(transformer)
            });
            const data = await response.json();
            setTransformer({...transformer, data})
            console.log('Formulier verzonden:', transformer);
            navigate('/')
        } catch (error) {
            console.error('Fout bij het ophalen van het product:', error);
        }

    }


    if (!transformer) {
        return (
            <h1>No note found</h1>
        );
    }


    return (
        <>
            <div className="flex flex-col justify-center w-3/12">
                <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={transformer.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="faction">Faction:</label>
                        <input
                            type="text"
                            id="faction"
                            name="faction"
                            value={transformer.faction}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description">Tekst:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={transformer.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="w-6/12" type="submit">Verzenden</button>
                </form>
                <DeleteButton id={transformer.id}/>
            </div>
        </>


    );
}

export default Transformers