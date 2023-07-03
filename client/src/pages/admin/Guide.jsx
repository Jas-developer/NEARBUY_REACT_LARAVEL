export const Guide = () => {

    const helpData = [
        {
          id: 1,
          title: 'Getting Started',
          content: 'Learn how to get started with the admin dashboard.',
          category: 'General',
        },
        {
          id: 2,
          title: 'Managing Users',
          content: 'Guide on how to manage user accounts and permissions.',
          category: 'User Management',
        },
        {
          id: 3,
          title: 'Creating Products',
          content: 'Instructions for creating and adding new products.',
          category: 'Product Management',
        },
        {
          id: 4,
          title: 'Generating Reports',
          content: 'Steps to generate various reports for analytics and insights.',
          category: 'Analytics',
        },
    ];

    return (
        <div class="h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            
            
            <div class="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] my-5 mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl font-bold text-navy-700 text-black">
                   Guide
                    </h4>
                    <p class="mt-2 px-2 text-base text-gray-600">
                        This section provides guidance and instructions for using the various features and functionalities of the admin dashboard.
                        Here, you can find step-by-step guides, FAQs, and other resources to assist you in managing the website or application.
                    </p>
                    
                </div> 
                <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    {helpData.map((helpItem) => (
                        <a href="#" key={helpItem.id} class="flex flex-col items-start justify-center hover:bg-orange-100 rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p class="text-sm text-gray-600">{helpItem.title}</p>
                        <p class="text-base font-medium text-navy-700 text-black">{helpItem.content}</p>
                        <small className="text-black">Category: {helpItem.category}</small>
                        </a>
                    ))}
                </div>
            </div>  
           
        </div>
        
    )
}