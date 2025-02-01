import {useNavigate} from "react-router";

function DeleteButton({id}) {
    const navigate = useNavigate();
    const handleDeleteClick = async () => {
        try {
            const response = await fetch('http://145.24.223.84:8880/transformers/'+ id, {
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

    return(
      <>
      <button className="w-6/12" onClick={handleDeleteClick}>
        Delete
      </button>
      </>
    );
}

export default DeleteButton;