const Last_Proyects = () => {
  return (
    <main className="bg-black -mt-[250px] sm:-mt-[500px]" id="proyects">
    <section className="flex flex-col">
      <section className="grid text-left justify-center items-center sm:gap-9">
        <div className="grid sm:mt-[900px] sm:-ml-[360px]">
          <p className="text-[32px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto md:w-[522px] md:h-[116px] sm:text-[48px]">
            Last Landing{" "}
            <span className="text-white">and website proyects</span>
          </p>
          
        </div>

        {/* IMAGES  */}
        <div className="grid justify-center items-center -ml-[20px] sm:-mt-[280px] sm:ml-[100px]">
          <div className="h-[200px] w-[270px] mt-[50px] -ml-[20px] bg-[url(/images/Mask_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Mask_desktop.png)] sm:w-[505px] sm:h-[517px] sm:-ml-[50px] sm:-mt-[120px]"></div>

          <div className="h-[150px] w-[150px] -mt-[70px] ml-[80px] bg-[url(/images/Ellipse_rigth_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_rigth_desktop.png)] sm:w-[340px] sm:h-[100px] sm:ml-[100px] sm:-mt-[250px]"></div>

          <div className="h-[190px] w-[120px] -mt-[350px] ml-[90px] bg-[url(/images/Mobil_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Mobil_desktop.png)] sm:w-[322px] sm:h-[365px] sm:ml-[50px] sm:-mt-[600px]"></div>
        </div>
      </section>

      {/*Proyects  */}
      <section className="grid text-[18px] text-center justify-center items-center bg-neutral-900 gap-1 w-[280px] h-[500px] rounded-xl mx-auto sm:flex-wrap sm:flex sm:grid-row sm:-sm:flex-wrap sm:grid-row sm:w-[1100px] sm:h-[240px] sm:pb-0">
        <section className="grid grid-cols-2 my-[20px] gap-4 sm:flex">
          
          {/*pokedex*/}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:py-0 sm:mt-[0] sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] rounded-md sm:w-[120px]"
              src="/images/Pokedex.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://entregable05-martinfarro.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Entregable05">Git Hub</a></button>
           </div>
          </div>

          {/* Rick&Morty */}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]"
              src="/images/Rick&Morty.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://entregable03-martinfarro.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Entregable03">Git Hub</a></button>
           </div>
          </div>

          {/* Usuarios */}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]"
              src="/images/Usuarios.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://entregable04-martinfarro.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Entregable04">Git Hub</a></button>
           </div>
          </div>

          {/* Fortuna */}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]"
              src="/images/Fortuna.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://entregable01-martinfarro.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Entregable01">Git Hub</a></button>
           </div>
          </div>

          {/* Ecommers */}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] aspect-square rounded-md sm:w-[120px]"
              src="/images/Ecommers.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://pastor-martin-farro-martinez-g28.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Fundamentos_Ecommerce">Git Hub</a></button>
           </div>
          </div>

          {/* Clima */}
          <div className="flex flex-col justify-center items-center bg-neutral-800 h-[120px] w-[120px] rounded-xl sm:w-[150px] sm:h-[150px]">
            <img
              className="flex mt-1  w-[80px] aspect-square rounded-md object-fill sm:w-[120px] "
              src="/images/Clima.png"
              alt=""
            />
            <div className="flex gap-2 mt-[4px]">
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://entregable02-martinfarro.netlify.app/">Tailwin</a></button>
              <button className="text-white  text-[10px] w-[50px] h-[20px] border-[2px] rounded-md gap-2 border-white"><a href="https://github.com/MartinFarro2020/Entregable02">Git Hub</a></button>
           </div>
          </div>
        </section>

        <div className="absolute h-[300px] w-[300px] -mt-[40px] ml-[30px] bg-[url(/images/Nube_mobile_cuatro.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desk_cuatro.svg)] sm:w-[80px] sm:h-[100px] sm:mt-[60px] sm:ml-[250px]"></div>
      </section>
    </section>
    </main>
    
  );
};
export default Last_Proyects;
