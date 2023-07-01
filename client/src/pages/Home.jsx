import { Hero } from "./components/hero/Hero";
import { ShopSale } from "./components/products/shop-sale/ShopSale";
import { SameDay } from "./components/products/same-day-section/SameDay";

export const Home = ()=> {
    return(
        <div className="md:mx-4 mx-1 lg:mx-12">
            <Hero />
            <ShopSale />
            <SameDay />
        </div> 
    )
}