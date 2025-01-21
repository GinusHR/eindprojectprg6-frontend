import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function Transformers() {
    const {id} = useParams()
    const [transformer, setTransformer] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        async function getNote() {
            try {
                const response = await fetch('http://145.24.223.84:8690/transformers/'+ id, {
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
        getNote();
    }, [id]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setTransformer({...transformer,
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

    const handleDeleteClick = async () => {
        try {
            const response = await fetch('https://notes.basboot.nl/notes/'+ id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
            navigate('/')

        } catch (error) {
            console.error('dit is de fout:', error)
        }
    }

    if(!transformer) {
        return(
            <h1>No note found</h1>
        );
    }


    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titel:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={transformer.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="author">Auteur:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={transformer.faction}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Tekst:</label>
                    <input
                        type="text"
                        id="body"
                        name="body"
                        value={transformer.description}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Verzenden</button>
            </form>

            <button onClick={handleDeleteClick}> delete</button>
        </div>


    );
}

export default Transformers