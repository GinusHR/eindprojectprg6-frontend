import {Link} from "react-router";

function les2Component({transformer}) {
    return (
        <div className="grid grid-cols-8 bg-white w-11/12 ">
            {transformer.map((transformer) => (
                <article key={transformer.id} className="bg-gray-200 m-2 border border-b-black rounded-lg p-3">
                    <h1 className="text-red-700">{transformer.name}</h1>
                    <h2 className="text-gray-800">{transformer.faction}</h2>
                    <p className="text-gray-500">{transformer.description}</p>
                    <Link className="text-purple-700 font-normal" to={`/transformer/${transformer.id}`}>edit</Link>
                </article>
            ))
            }
        </div>
    );
}

export default les2Component;