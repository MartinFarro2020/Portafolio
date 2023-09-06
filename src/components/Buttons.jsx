const Buttosn = () => {
  return (
    <>
      <form className="h-screen bg-black -mt-[30px]">
            
        <section className="grid grid-col  pb-[20px] text-[18px] text-center justify-center items-center bg-neutral-900 gap-3 w-[220px] h-[900px] mt-[150px] rounded-xl mx-auto sm:flex-wrap sm:flex sm:grid-row sm:-sm:flex-wrap sm:grid-row sm:w-[900px] sm:h-[240px] sm:pb-0">
          <div className="flex flex-col py-4 mt-4 text-center justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-xl sm:py-0 sm:mt-[0]">
            <img  className="flex mt-1  w-[30px]" src="/images/arturito.png" alt="" />
            <p className="text-white ">Experience the world through VR glasses</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md ">
            <img src="" alt="" />
            <p className="flex p-2 text-white">View all your surrounding with 360</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md">
            <img src="" alt="" />
            <p className="flex text-white">Incredible gaming experience</p>
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md">
            <img src="" alt="" />
            <p className="flex text-white">Making meetings and tours easier</p>
          </div>
          
          <div className="absolute h-[300px] w-[300px] -mt-[40px] ml-[30px] bg-[url(/images/Nube_mobile_cuatro.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desk_cuatro.svg)] sm:w-[80px] sm:h-[100px] sm:mt-[60px] sm:ml-[250px]"></div>
        </section>

        
      </form>
    </>
  );
};
export default Buttosn;
