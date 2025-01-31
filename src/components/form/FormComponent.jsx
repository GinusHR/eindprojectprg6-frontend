import {useState} from 'react';

function FormComponent({onCreate}) {
    const [formData, setFormData] = useState(
        {
            name: '',
            faction: '',
            description: ''
        }
    );

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://145.24.223.84:8690/transformers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setFormData({...formData, data})
            console.log('Formulier verzonden:', formData);
            onCreate(data)
        } catch (error) {
            console.error('Fout bij het ophalen van het product:', error);
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col align-top justify-center">
                    <label className="font-bold text-lg" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded p-2 text-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="faction">Faction:</label>
                    <input
                        type="text"
                        id="faction"
                        name="faction"
                        value={formData.faction}
                        onChange={handleInputChange}
                        className="rounded p-2 text-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="rounded p-2 text-lg"
                    />
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </>

    );

}

export default FormComponent;
