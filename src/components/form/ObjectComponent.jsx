import {Link} from "react-router";
import FavoriteButton from "../FavoriteButton.jsx";

function ObjectComponent({transformer}) {
    return (
        <div className="flex flex-row flex-wrap w-11/12 ">
            {transformer.map((transformer) => (
                <article key={transformer.id} className="w-[20vw] h-[17vh] m-2 rounded-lg p-3">
                    <h2 className="text-2xl">{transformer.name}</h2>
                    <h3 className="text-cyan-600 text-xl">{transformer.faction}</h3>
                    <Link className="textLink" to={`/detail/${transformer.id}`}>Detail</Link>
                    <FavoriteButton pickTransformer={transformer}/>
                </article>
            ))
            }
        </div>
    );
}

export default ObjectComponent;