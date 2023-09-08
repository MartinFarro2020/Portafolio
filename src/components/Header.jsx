const Header = () => {
  return (
    <main className="bg-black sm:-mb-[20px]">
      <form className=" grid mx-auto sm:-mt-[600px]">
        

        <div className="h-[12px] w-[41px] -mt-[500px] ml-[30px] bg-[url(/images/Ellipse_mobile_dos.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desktop_dos.svg)] sm:h-[31px] sm:w-[107px] sm:ml-[550px] sm:mt-[100px]"></div>

        <div className="h-[28px] w-[97px] -mt-[540px] ml-[180px] bg-[url(/images/Ellipse_left_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_left_desktop.svg)] sm:h-[70px] sm:w-[250px] sm:ml-[1000px] sm:mt-[50px]"></div>

        <div className="h-[300px] w-[240px] -mt-[620px] ml-[80px] bg-[url(/images/Nube_mobile_uno.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desktop_uno.png)] sm:w-[1300px] sm:h-[900px] sm:-mt-[380px] sm:ml-[70px]"></div>

        <div className="h-[250px] w-[200px] -mt-[530px] ml-[50px] bg-[url(/images/Astronaut_mobile.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(./images/Astronaut_desk.svg)] sm:w-[700px] sm:h-[900px] sm:ml-[600px] sm:-mt-[700px]"></div>

        <section className="grid">
        <div className="h-[7px] w-[25px] -mt-[430px] ml-[60px] bg-[url(/images/Ellipse_mobile_uno.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desk_uno.svg)] sm:h-[10px] sm:w-[65px] sm:ml-[660px] sm:-mt-[550px]"></div>

        <div className="h-[12px] w-[40px] -mt-[550px] ml-[80px] bg-[url(/images/Ellipse_mobile_tres.svg)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Ellipse_desktop_tres.svg)] sm:h-[31px] sm:w-[107px] sm:ml-[740px] sm:-mt-[950px]"></div>
          
        <div className="h-[315px] w-[350px] -mt-[500px] -ml-[230px] bg-[url(/images/Nube_mobile_dos.png)] bg-contain bg-right-top bg-no-repeat sm:[url(/images/Nube_desktop_dos.png)] sm:w-[1500px] sm:h-[1300px] sm:-mt-[1560px] sm:-ml-[1000px]"></div>

        <div className="h-[450px] w-[300px] -mt-[480px] ml-[50px] bg-[url(/images/Nube_mobile_tres.png)] bg-contain bg-no-repeat sm:bg-[url(/images/Nube_desktop_tres.png)] sm:bg-contain sm:bg-no-repeat sm:w-[300px] sm:h-[900px] sm:mt-[160px] sm:ml-[500px]"></div>

        <div className="h-[30px] w-[30px] -mt-[1250px] ml-[10px] bg-[url(/images/Group_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:ml-[60px] sm:-mt-[2050px]"></div>
          
        </section>

        <section className="-mt-[600px]  items-center sm:-mt-[2320px] sm:ml-[100px]">
          <div className="grid gap-2 text-center mx-1">
            <p className="text-[30px] font-sen-sen text-[#9BA4ED] text-left mt-[230px] sm:text-[48px] sm:w-[550px] sm:mt-[500px] sm:-ml-[80px] sm:font-bold">
              Hi! <span className="text-white">I’am a backend developed</span>
            </p>
            <p className="text-white font-sen-sen text-[14px] text-left mx-auto sm:w-[440px] sm:-ml-[75px]">
              I’m probably the most passionate developer you will ever get to
              work with. If you have a great project that needs some amazing
              skills, I’m your guy.
            </p>
            <div className="flex mt-[20px]">
              <button className="text-white border-2 border-white w-[95px] rounded-md sm:-ml-[80px]">
                Click Here
              </button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
};
export default Header;
