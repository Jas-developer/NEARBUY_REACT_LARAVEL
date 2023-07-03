export const Products = () => {
    return (
        <>
            <div class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 text-center">
         
                <div class="flex items-center justify-center flex-col p-12">
                <h2 className="text-2xl mb-2">Add New Product</h2>
                <div class="mx-auto w-full bg-white flex flex-col">
                
                    <form
                    class="py-6 px-9 flex flex-row justify-evenly"
                    action="#"
                    method="POST"
                    >
                    

                    <div class="mb-6 pt-4">
                        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                        Upload Image File
                        </label>

                        <div class="mb-8">
                        <input type="file" name="file" id="file" class="sr-only" />
                        <label
                            for="file"
                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                        >
                            <div>
                            <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                Drop files here
                            </span>
                            <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                Or
                            </span>
                            <span
                                class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                            >
                                Browse
                            </span>
                            </div>
                        </label>
                        </div>

                        <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                        <div class="flex items-center justify-between">
                            <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                            </span>
                            <button class="text-[#07074D]">
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                                />
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                                />
                            </svg>
                            </button>
                        </div>
                        </div>

                        <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                        <div class="flex items-center justify-between">
                            <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                            </span>
                            <button class="text-[#07074D]">
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                fill="currentColor"
                                />
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                fill="currentColor"
                                />
                            </svg>
                            </button>
                        </div>
                        <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                            <div
                            class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
                            ></div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="mb-6 pt-4  flex-2 text-start">
                        <label
                        for="productName"
                        class="block text-base font-medium text-[#07074D]"
                        >
                        Product Name
                        </label>
                        <input
                        type="text"
                        name="productName"
                        id="productName"
                        placeholder="Type product name here"
                        class="w-full mb-3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        
                        <label
                        for="productPrice"
                        class="block text-base font-medium text-[#07074D]"
                        >
                        Product Price
                        </label>
                        <input
                        type="number"
                        name="productPrice"
                        id="productPrice"
                        placeholder="Enter product price here"
                        class="w-full mb-3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />

                        <label
                        for="productSDescription"
                        class="block text-base font-medium text-[#07074D]"
                        >
                        Short description
                        </label>
                        <textarea
                        type="text"
                        name="productSDescription"
                        id="productSDescription"
                        placeholder="Enter product short description here"
                        class="w-full mb-3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />

                        <label
                        for="productQuantity"
                        class="block text-base font-medium text-[#07074D]"
                        >
                        Stock Quantity
                        </label>
                        <input
                        type="number"
                        name="productQuantity"
                        id="productQuantity"
                        placeholder="Enter product stock quantity"
                        class="w-full mb-3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />

                        <label
                        for="productDescription"
                        class="block text-base font-medium text-[#07074D]"
                        >
                        Full description
                        </label>
                        <textarea
                        type="text"
                        name="productDescription"
                        id="productDescription"
                        placeholder="Enter product full description here"
                        class="w-full mb-3 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div className=" flex">
                        <button
                        class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                         + Add Product
                        </button>
                    </div>
                    
                    </form>
                   
                </div>
            </div>
            </div>
        </>
    )
}