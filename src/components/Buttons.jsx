const Buttosn = () => {
  return (
    <main className="bg-black mt-[200px] sm:mt-[300px]" id="buttons">
      <form className="grid justify-center items-center" >
            
        <p className=" flex font-semibold text-center text-white font-sen-sen text-[40px] sm:text-center sm:flex-col sm:mt-[100px]">Habilidades Tecnicas</p>

        <section className="grid grid-col  pb-[20px] text-[18px] text-center justify-center items-center bg-neutral-900 gap-2 w-[100px] h-[350px] mt-[20px] rounded-xl mx-auto sm:flex-wrap sm:flex sm:grid-row sm:grid-row sm:w-[600px] sm:h-[140px] sm:pb-[0] ">
          
          <div className="flex flex-col mx-auto mt-4 text-center justify-center items-center bg-neutral-600 h-[70px] w-[70px] rounded-xl sm:py-0 sm:mt-[0] sm:w-[100px] sm:h-[100px] sm:m-[2px]">
            <img  className="flex mt-1 w-[50px] sm:w-[50px]" src="/images/JS.png" alt="" />
          
          </div>
          <div className="flex justify-center items-center bg-neutral-600 h-[70px] w-[70px] rounded-md sm:w-[100px] sm:h-[100px] sm:m-[2px]">
            <img className="flex mt-1 w-[50px] sm:w-[50px]" src="/images/HTML.png" alt="" />
           
          </div>
          <div className="flex justify-center items-center bg-neutral-600 h-[70px] w-[70px] rounded-md sm:w-[100px] sm:h-[100px] sm:m-[2px]">
          <img className="flex mt-1  w-[50px] sm:w-[50px]" src="/images/CSS.png" alt="" /></div>

          <div className="flex justify-center items-center bg-neutral-600 h-[70px] w-[70px] rounded-md sm:w-[100px] sm:h-[100px] sm:m-[2px]">
          <img className="flex mt-1 w-[50px] sm:w-[90px]" src="/images/REACT.png" alt="" /></div>
  
        </section>
        <div className="h-[550px] -mt-[250px] bg-[url(/images/Nube_mobile_cuatro.png)] bg-right-top bg-no-repeat sm:[url(/images/Nube_desk_cuatro.svg)] sm:w-[80px] sm:h-[100px] sm:mt-[60px] sm:ml-[250px]"></div>
        
      </form>
    </main>
  );
};
export default Buttosn;
//** */