const DisplayBoard = () => {
  return (
    <div className="w-[500px] h-[300px] flex items-center justify-center border border-sky-700 rounded-lg">
      <div className=" w-full h-full flex flex-col">
        {/* top */}
        <div className="flex-1 flex justify-center items-center px-16 py-8">
          <div className="flex flex-col w-full h-full border border-red-500 ">
            <div>
              <h2>hello</h2>
            </div>
            <div>
              <p>sucks</p>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div>fuck</div>
      </div>
    </div>
  );
};

export default DisplayBoard;
