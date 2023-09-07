const Last_Proyects = () => {
  return (
    <form className="h-screen mt-[660px] sm:-mt-[950px]">
      <section className="grid gap-10 p-4 text-left justify-center items-center">
        <div className="grid gap-6 sm:mt-[900px] sm:ml-[650px]">
          <p className="text-[32px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto md:w-[522px] md:h-[116px] sm:text-[48px] ">Last Landing <span className="text-white">and website proyects</span>
          </p>
          <p className="text-white font-sen-sen text-[14px] ml-3 mr-3 mx-auto sm:w-[460px] sm:h-[100px]">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>

          //* IMAGES */
        <div className="relative grid justify-center items-center -mt-[10px] -ml-[20px] sm:-mt-[280px] sm:ml-[100px]">
          
          <div className="absolute h-[350px] w-[270px] mt-[200px] ml-[20px] bg-[url(/images/Mask_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Mask_desktop.png)] sm:w-[505px] sm:h-[517px] sm:-ml-[50px] sm:-mt-[120px]"></div>

          <div className="absolute h-[250px] w-[180px] mt-[450px] ml-[80px] bg-[url(/images/Ellipse_rigth_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_rigth_desktop.png)] sm:w-[340px] sm:h-[100px] sm:ml-[100px] sm:mt-[150px]"></div>

          <div className="absolute h-[190px] w-[180px] mt-[70px] ml-[60px] bg-[url(/images/Mobil_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Mobil_desktop.png)] sm:w-[322px] sm:h-[365px] sm:ml-[50px] sm:-mt-[200px]"></div>

        </div>
      </section>
      //**Proyectos */ 
      <section className="grid text-[18px] text-center justify-center items-center bg-neutral-900 gap-1 w-[280px] h-[400px] mt-[250px] rounded-xl mx-auto sm:flex-wrap sm:flex sm:grid-row sm:-sm:flex-wrap sm:grid-row sm:w-[1100px] sm:h-[240px] sm:pb-0">
          <section className="grid grid-cols-2 gap-4 sm:flex">
            <div className="flex  justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:py-0 sm:mt-[0] sm:w-[150px] sm:h-[150px]">
            <img  className="flex mt-1  w-[80px] rounded-md sm:w-[120px]" src="/images/Pokedex.png" alt="" />
          </div>

          <div className="flex justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]" src="/images/Rick&Morty.png" alt="" />
           
          </div>

          <div className="flex justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:w-[150px] sm:h-[150px]">
          <img className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]" src="/images/Usuarios.png" alt="" />  
          </div>

          <div className="flex justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:w-[150px] sm:h-[150px]">
          <img className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]" src="/images/Fortuna.png" alt="" />
          </div>

          <div className="flex justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:w-[150px] sm:h-[150px]">
          <img className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]" src="/images/Ecommers.png" alt="" />
          </div>
          <div className="flex justify-center items-center bg-neutral-800 h-[110px] w-[110px] rounded-xl sm:w-[150px] sm:h-[150px]">
          <img className="flex mt-1  w-[80px] aspect-square rounded-md object-fill sm:w-[120px] " src="/images/Clima.png" alt="" />
          </div>

          </section>
          
          
          <div className="absolute h-[300px] w-[300px] -mt-[40px] ml-[30px] bg-[url(/images/Nube_mobile_cuatro.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desk_cuatro.svg)] sm:w-[80px] sm:h-[100px] sm:mt-[60px] sm:ml-[250px]"></div>
        </section>
    </form>
  );
};
export default Last_Proyects;
