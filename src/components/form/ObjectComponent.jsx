import {Link} from "react-router";

function les2Component({transformer}) {
    return (
        <div className="flex flex-row flex-wrap w-11/12 ">
            {transformer.map((transformer) => (
                <article key={transformer.id} className="w-[20vw] h-[24vh] m-2 rounded-lg p-3">
                    <h2 className="text-red-700">{transformer.name}</h2>
                    <h3 className="text-gray-800">{transformer.faction}</h3>
                    <p className="text-gray-500">{transformer.description}</p>
                    <Link className="text-purple-700 font-normal" to={`/transformers/${transformer.id}`}>edit</Link>
                </article>
            ))
            }
        </div>
    );
}

export default les2Component;