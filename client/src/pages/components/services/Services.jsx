import { AiOutlineRollback, AiOutlineShopping, AiOutlineLock, AiOutlinePushpin, AiFillCar } from 'react-icons/ai';

export default function Services(){
    return (
        <>
            <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
                <div className="container xl:max-w-6xl mx-auto px-4">
                
                    <header className="text-center mx-auto mb-12 lg:px-20">
                        <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style={{margin: '0 auto',height: '35px'}} xml:space="preserve">
                            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{fill: 'transparent',strokeWidth: '2',strokeWiterlimit: '10' }}></circle>
                            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{strokeWidth: '2',strokeMiterlimit: '10'}}></line>
                            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{strokeWidth: '2',strokeMiterlimit: '10'}}></line>
                        </svg>
                        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Delivering Seamless Experiences: Secure Payments, Fast Shipping, and Exceptional Service</p>
                    </header>

                    <div className="flex flex-wrap flex-row -mx-4 text-center">
                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3" >
                            
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    <AiOutlineLock size={'50px'}/>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Secured Payment Integration</h3>
                                <p className="text-gray-500">Enable secure payment options, such as credit cards, PayPal, to ensure safe transactions for buyers.</p>
                            </div>
                        
                        </div>

                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3" >
                            
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    <AiOutlineShopping size={'50px'}/>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Product Availability</h3>
                                <p className="text-gray-500">Display real-time availability status to inform buyers if a product is in stock, on backorder, or out of stock.</p>
                            </div>
                        
                        </div>

                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3" >
                            
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    <AiOutlinePushpin size={'50px'}/>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Location-Based Services</h3>
                                <p className="text-gray-500">Personalized recommendations and local pickup options tailored to your location for a convenient shopping experience.</p>
                            </div>
                        
                        </div>

                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3">
                        
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                    <AiFillCar size={'50px'}/>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Shipping and Delivery</h3>
                                <p className="text-gray-500">Transparent shipping methods, delivery times, and tracking options for reliable and timely order fulfillment.</p>
                            </div>
                        
                        </div>
                        
                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3">
                            
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                   <AiOutlineRollback size={'50px'}/>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Return and Refund Policy</h3>
                                <p className="text-gray-500">Buyer-centric return and refund policy ensuring customer satisfaction and a straightforward process for returns or exchanges.</p>
                            </div>
                        
                        </div>
                    
                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 hover:-translate-y-3" >
                            
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4">
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Customer Support</h3>
                                <p className="text-gray-500">Prompt and reliable customer support available for any inquiries, assistance, or order-related concerns.</p>
                            </div>
                        
                        </div>
                    </div>
            
                </div>
            </div>
        </>
    )
}