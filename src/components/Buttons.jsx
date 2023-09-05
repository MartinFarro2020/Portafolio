const Buttosn = () => {
  return (
    <>
      <form className="h-screen bg-black pt-[20px]">
        <section className="grid grid-col justify-center items-center bg-neutral-900 gap-3 w-[180px] h-[550px] mt-[30px] rounded-xl mx-auto">
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl">
            <img  className="flex w-[30px]" src="./images/arturito.png" alt="" />
            <p className="text-white">Experience the world through VR glasses</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-md">
            <img src="" alt="" />
            <p className="flex text-white">View all your surrounding with 360</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-md">
            <img src="" alt="" />
            <p className="flex text-white">Incredible gaming experience</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-md">
            <img src="" alt="" />
            <p className="flex text-white">Making meetings and tours easier</p>
          </div>
        </section>
      </form>
    </>
  );
};
export default Buttosn;
