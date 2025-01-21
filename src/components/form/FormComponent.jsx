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
        setFormData({...formData,
            [name]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('https://notes.basboot.nl/notes', {
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
                <div>
                    <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="author">Faction:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.faction}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Description:</label>
                    <input
                        type="text"
                        id="body"
                        name="body"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Verzenden</button>
            </form>
        </>

    );

}

export default FormComponent;
