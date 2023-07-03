import Map from './components/maps/Map';
import Details from './components/maps/Details';

 
export const Store = ()=> {
    return (
        <>
            <div className="flex flex-col lg:flex-row  h-screen">
                <div className="flex-1 lg:overflow-y-auto">
                    <Details />
                </div>
                <div className="w-full lg:w-8/12 h-screen ">
                    <Map />
                </div>
            </div>
        </>
    )
}