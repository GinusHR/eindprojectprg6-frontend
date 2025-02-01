import FormComponent from "../components/form/FormComponent.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function Create() {
    const [transformer, setTransformer] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchTransformer() {
            try {
                const response = await fetch('http://145.24.223.84:8880/transformers', {
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
            <div className="flex flex-col justify-center w-3/12">
                <FormComponent onCreate={onCreate} />
            </div>

        </>
    );
}

export default Create;