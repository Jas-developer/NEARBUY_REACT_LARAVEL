import StoreMiniProfile from "../stores/StoreMiniProfile"

export default function Details() {
    return (
        <>
            <div className="bg-white font-sans h-auto w-full flex  justify-center items-center mt-20 ">
                <StoreMiniProfile 
                    picture='https://www.smsupermalls.com/data/uploads/2022/01/MAAX_1.jpg' 
                    name='Mall Of Asia Arena'
                    category='Shopping Mall'
                    hours='Daily - 10AM-9PM'
                    address='Coral Way cor., J.W. Diokno Blvd. Mall of Asia Complex, Brgy. 076 Zone 10, CBP 1-A 1300 Pasay City Philippines'
                />
                <StoreMiniProfile 
                    picture='https://contents.smsupermalls.com/data/uploads/2022/04/MHG_8788_1_1.png' 
                    name='MOA Square'
                    category='Shopping Mall'
                    hours='Daily - 10AM-10PM'
                    address='GXMJ+4W4 Complex, Mall of Asia - Cavite City, Pasay, Metro Manila'
                />
                <StoreMiniProfile 
                    picture='https://api.ayalamalls.com/api/cms-content/resources/image/wc-cms-3524a911-8d21-4467-b659-f6def2ba103d.png' 
                    name='Ayala Malls Central Bloc'
                    category='Shopping Mall'
                    hours='Daily - 10AM-9PM'
                    address='Coral Way cor., J.W. Diokno Blvd. Mall of Asia Complex, Brgy. 076 Zone 10, CBP 1-A 1300 Pasay City Philippines'
                />
            </div>
        </>
    )
}