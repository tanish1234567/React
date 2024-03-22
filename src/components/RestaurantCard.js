import {ITEM_IMG_LINK} from "../utils/links"
const RestaurantCard = (props)=>{
    const {id,name,cloudinaryImageId,cuisines,avgRating} = props?.info;
    return (
        <>
            <div className="card">
                <img src={ITEM_IMG_LINK+cloudinaryImageId} className="img"alt="" />
                <div className="name">Name: {name}</div>
                <div className="rating">Ratings: {avgRating}</div>
                <div className="cuisines">Cuisines: {cuisines.join(", ")}</div>
            </div>
        
        </>
    )
}

export default RestaurantCard; 