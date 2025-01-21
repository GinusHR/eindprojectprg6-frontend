import FormComponent from "../components/form/FormComponent.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function Create() {
    const [transformer, setTransformer] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchTransformer() {
            try {
                const response = await fetch('https://notes.basboot.nl/notes', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data.items)
                setTransformer(data.items);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchTransformer();
    }, []);
    const onCreate = () => {
        navigate('/');

    }
    return (
        <>
            <div className="flex flex-col">
                <FormComponent onCreate={onCreate} />
            </div>

        </>
    );
}

export default Create;