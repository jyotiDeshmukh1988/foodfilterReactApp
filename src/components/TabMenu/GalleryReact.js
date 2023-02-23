import React, {useState} from 'react'
import "../TabMenu/tab.css";
import Menu from "./menu";
import MenuItems from './MenuItems';
import Tab from './tab';
const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [category,setCategory] = useState([...new Set(Menu.map((item)=>item.category)),'All'])
    const filterItem = (categItem) => {
        //alert(categItem)
        if(categItem === 'All') {
            setItems(Menu)
        }
        else
        {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItems(updatedItems);
        }
    }
   // console.log(category)
    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            
            <Tab category={category} filterItem={filterItem}/>

            {/* my main items section  */}
            <MenuItems items={items}/>
        </>
    )
}

export default GalleryReact