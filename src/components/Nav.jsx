const Nav = () => {
  return (
    <main className="min-h-screen ">
      <form className="grid relative bg-black max-w-[1440px] pt-[10px] mx-auto ob">
        <section>
          <nav className="grid justify-Center text-gray-100">
            <ul class="flex justify-Center items-center gap-4 mx-auto text-[12px] invisible sm:visible sm:text-[17px] sm:gap-10">
              <li>
                <a href="#footer">Home</a>
              </li>
              <li>
                <a href="">Proyects</a>
              </li>
              <li>
                <a href="">About me</a>
              </li>
              <li>
                <a href="">Contact me</a>
              </li>
            </ul>
          </nav>
        </section>
      </form>
      <section className="grid relative">
        
        //*Ellipses*/
        <div className="absolute h-[30px] w-[30px] -mt-[20px] ml-[20px] bg-[url(/images/Group_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:ml-[60px]"></div>
        <div className="absolute  h-[7px] w-[25px]  mt-[160px] ml-[80px] bg-[url(/images/Ellipse_mobile_uno.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desk_uno.svg)] sm:h-[10px] sm:w-[65px] sm:ml-[680px] sm:mt-[300px]"></div>
        <div className="absolute h-[12px] w-[41px] mt-[80px] ml-[40px] bg-[url(/images/Ellipse_mobile_dos.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desktop_dos.svg)] sm:h-[31px] sm:w-[107px] sm:ml-[540px] sm:mt-[100px]"></div>
        <div className="absolute  h-[12px] w-[40px] mt-[50px] ml-[80px] bg-[url(/images/Ellipse_mobile_tres.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desktop_tres.svg)] sm:h-[31px] sm:w-[107px] sm:ml-[640px] sm:mt-[40px]"></div>
        <div className="absolute h-[28px] w-[97px] mt-[50px] ml-[180px] bg-[url(/images/Ellipse_mobile_cuatro.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desk_cuatro.svg)] sm:h-[70px] sm:w-[250px] sm:ml-[940px] sm:mt-[40px]"></div>
        
        
        //*Nubes*//
        <div className="absolute h-[300px] w-[300px] -mt-[40px] ml-[30px] bg-[url(/images/Nube_mobile_uno.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desktop_uno.png)] sm:w-[1300px] sm:h-[900px] sm:-mt-[160px] sm:ml-[50px]"></div>

        <div className="absolute h-[315px] w-[350px] mt-[120px] -ml-[230px] bg-[url(/images/Nube_mobile_dos.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desktop_dos.png)] sm:w-[1500px] sm:h-[1300px] sm:-mt-[60px] sm:-ml-[1000px]"></div>

        <div className="absolute h-[450px] w-[300px] mt-[220px] ml-[20px] bg-[url(/images/Nube_mobile_tres.png)] bg-contain bg-no-repeat sm:bg-[url(/images/Nube_desktop_tres.png)] sm:bg-contain sm:bg-no-repeat sm:w-[300px] sm:h-[900px] sm:mt-[160px] sm:ml-[500px]"></div>

        //*Astronaut*//
        <div className="absolute h-[250px] w-[200px] mt-[60px] ml-[70px] bg-[url(/images/Astronaut_mobile.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(./images/Astronaut_desk.svg)] sm:w-[700px] sm:h-[900px] sm:ml-[650px] sm:mt-[100px]"></div>
      </section>
        //*text*//
      <section className="mt-[110px]">
        <div className="grid gap-2 text-center justify-center item center mx-1 sm:-ml-[520px]">
          <p className="text-[30px] font-sen-sen text-[#9BA4ED] text-left sm:text-[48px] sm:w-[550px] sm:-mt-[100px] sm:-ml-[80px] sm:font-bold">
            Hi! <span className="text-white">I’am a backend developed</span>
          </p>
          <p className="text-white font-sen-sen text-[14px] text-left mx-auto sm:w-[440px] sm:-ml-[75px]">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
          <div className="flex mt-[20px]">
            <button className="text-white border-2 border-white w-[95px] rounded-md sm:-ml-[80px]">
              Click Here
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Nav;
