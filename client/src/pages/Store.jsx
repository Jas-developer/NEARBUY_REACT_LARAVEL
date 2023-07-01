import Map from './components/maps/Map';
import Details from './components/maps/Details';

export const Store = ()=> {
    return (
        <>
            <div className="">
                <Map />
                <Details className="overflow-x-scroll"/>
            </div>
        </>
    )
}