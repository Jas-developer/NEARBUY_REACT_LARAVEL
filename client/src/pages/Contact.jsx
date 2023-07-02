export const Contact = () => {
  return (
    <div className="md:container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid-item bg-red-500 "></div>
        <div className="grid-item bg-green-200">
          <div className="grid p-10 ml-16 md:ml-10 lg:ml-36">
            <form action="">
              <input
                type="text"
                placeholder="YourName"
                className="text-black w-88 p-1 text-center border-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
