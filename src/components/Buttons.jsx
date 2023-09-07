const Buttosn = () => {
  return (
    <main id="buttons">
      <form className="h-screen bg-black mt-[100px] sm:mt-[450px]" >
            
        <p className=" flex font-semibold text-center text-white font-sen-sen text-[40px] sm:text-center sm:flex-col">Habilidades Tecnicas</p>
        <section className="grid grid-col  pb-[20px] text-[18px] text-center justify-center items-center bg-neutral-900 gap-3 w-[220px] h-[900px] mt-[50px] rounded-xl mx-auto sm:flex-wrap sm:flex sm:grid-row sm:-sm:flex-wrap sm:grid-row sm:w-[900px] sm:h-[240px] sm:pb-0">
          
          <div className="flex flex-col py-4 mt-4 text-center justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-xl sm:py-0 sm:mt-[0]">
            <img  className="flex mt-1 w-[100px]" src="/images/JS.png" alt="" />
          
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md ">
            <img className="flex mt-1  w-[120px]" src="/images/HTML.png" alt="" />
           
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md">
          <img className="flex mt-1  w-[80px]" src="/images/CSS.png" alt="" />
            
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[200px] w-[200px] rounded-md">
          <img className="flex mt-1  w-[180px]" src="/images/REACT.png" alt="" />
      
          </div>
          
          <div className="absolute h-[300px] w-[300px] -mt-[40px] ml-[30px] bg-[url(/images/Nube_mobile_cuatro.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desk_cuatro.svg)] sm:w-[80px] sm:h-[100px] sm:mt-[60px] sm:ml-[250px]"></div>
        </section>

        

        
      </form>
    </main>
  );
};
export default Buttosn;
