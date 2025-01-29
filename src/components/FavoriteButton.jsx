import {useState} from "react";

function FavoriteButton({pickTransformer}) {
    const [transformer, setTransformer] = useState(pickTransformer);
    const setFavorite = async () => {
        try {

            const updatedFavorite = !transformer.favorite;

            const response = await fetch('http://145.24.223.84:8690/transformers/' + pickTransformer.id, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({favorite: updatedFavorite})
            });
            const data = await response.json();
            console.log("API response:", data);
            setTransformer((prev) => ({ ...prev, favorite: updatedFavorite }));
        } catch (error) {
            console.error('Fout bij het updaten van favoriet status:', error);

        }

    }
    return (
        <>
            <button onClick={setFavorite}>
                {transformer.favorite ? "Unfavorite" : "Favorite"}
            </button>
        </>
    )
}


export default FavoriteButton;