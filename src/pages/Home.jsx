import ObjectComponent from "../components/form/ObjectComponent.jsx";
import {useEffect, useState} from "react";

function Home () {
    const [transformer, setTransformer] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const ITEMS_PER_PAGE = 9;

    useEffect(() => {
        async function fetchTransformer() {
            try {
                setIsLoading(true);
                const response = await fetch(`http://145.24.223.84:8690/transformers?page=${currentPage}&limit=${ITEMS_PER_PAGE}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();
                console.log(data.items)
                setTransformer(data.items);
                setCurrentPage(data.pagination.currentPage);
                setTotalPages(data.pagination.totalPages);
                setIsLoading(false);
            } catch (error) {
                console.error('Fout bij het ophalen van het product:', error);
            }
        }

        fetchTransformer(currentPage);
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    return (
        <div className="flex flex-col justify-center">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ObjectComponent transformer={transformer}/>
            )}
            <div className="flex items-center justify-center space-x-4 mt-6">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-lg font-semibold text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>

    );
}

export default Home;