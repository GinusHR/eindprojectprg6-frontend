import {Link} from "react-router";
import FavoriteButton from "../FavoriteButton.jsx";

function ObjectComponent({transformer}) {
    const article = document.getElementsByClassName('art')
    const checkFavorite = () => {
        if (transformer.favorite) {
            article.className.add('favorite');
        }
        console.log(article)
    }
    checkFavorite();
    return (
        <div className="flex flex-row justify-center flex-wrap  ml-[7vw] w-10/12 ">
            {transformer.map((transformer) => (
                <article key={transformer.id} className="w-[20vw] h-[20vh] m-2 rounded-lg p-3 art">
                    <h2 className="text-2xl">{transformer.name}</h2>
                    <h3 className="text-cyan-600 text-xl">{transformer.faction}</h3>
                    <div id="linkDiv" className="flex gap-3.5 mt-3 ">
                        <Link className="textLink" to={`/detail/${transformer.id}`}>Detail</Link>
                        <FavoriteButton pickTransformer={transformer}/>
                    </div>

                </article>
            ))
            }
        </div>
    );
}

export default ObjectComponent;