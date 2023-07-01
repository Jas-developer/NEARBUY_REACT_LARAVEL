export default function StoreMiniProfile({picture,name,category,hours,address}) {
    return (
        <>
            <div className="card w-96 mx-auto bg-orange-400 rounded-3xl shadow-xl hover:shadow-orange-200 text-white">
                    <img className="w-32 mx-auto rounded-full -mt-14 border-8 border-orange-400 " src={picture} alt=""/>
                    <div className="text-center mt-2 text-3xl font-medium">{name}</div>
                    <div className="text-center mt-2 font-light text-sm">{category}</div>
                    <div className="text-center font-normal text-lg">🕒{hours}</div>
                    <div className="px-6 text-center mt-2 font-light text-sm">
                    <p>📌{address}</p>
                    </div>
                    <hr className="mt-8"/>
                    <div className="flex p-4">
                    <div className="w-1/2 text-center">
                        <button className="font-semibold hover:font-bold">View Store</button>
                    </div>
                    <div className="w-0 border border-gray-300">
                        
                    </div>
                    <div className="w-1/2 text-center">
                        <button className="font-semibold hover:font-bold">Get Directions</button>
                    </div>
                    </div>
            </div>
        </>
    )
}