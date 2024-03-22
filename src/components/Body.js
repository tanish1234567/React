import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    const [iptext, setIptext] = useState("");
    const [resList, setResList] = useState([]);
    const [restaurants,setRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7235324&lng=76.7873219&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await data.json();
        setRestaurants(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setResList(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    function handleClickForTopRestaurants(){
        const list = resList.filter((ele)=> {
            return ele.info.avgRating>4.0;
        })
        setResList(list);
    }
    function handleClickForFilter(){
        setResList(restaurants);
    }
    function handleOnChangeInput(e){
        let val = e.target.value;
        const iplist = restaurants.filter((ele)=> ele.info.name.toLowerCase().includes(val))
        setResList(iplist);
        setIptext(e.target.value);
    }
    return restaurants.length === 0 ? <Shimmer/>:(
        <>

            <button id="toprestaurants" onClick={handleClickForTopRestaurants}>Filter top restaurants</button>
            <button id="clearfilter" onClick={handleClickForFilter}>Clear all filters</button>
            <div className="search">
                <input type="text" onChange={handleOnChangeInput} value={iptext}/>
            </div>
            <div id="listOfCards">
                {
                    resList.map((ele) => (
                        <RestaurantCard key={ele.info.id} info={ele.info} />
                    ))
                }
            </div>
        </>
    )
}

export default Body;