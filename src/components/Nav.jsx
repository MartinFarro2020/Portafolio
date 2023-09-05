import Buttosn from "./Buttons";
import Last_Proyects from "./Last_Proyects";
import Footer from "./Footer";
import Contact from "./Contact";
const Nav = () => {
  return (
    <main className="bg-black">
      <form className="grid relative bg-black max-w-[1440px] pt-[10px] mx-auto">
        <section>
          <nav className="grid justify-Center text-gray-100">
            <ul class="flex justify-Center items-center gap-4 mx-auto text-[12px]">
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
        <div className="absolute h-[300px] aspect-square -mt-[60px] ml-[20px] md:h-[600px] md:w-[600px] md:justify-end">
          <img src="./images/Nube_Uno.png" alt="" />
        </div>
        <div className="absolute h-[20px] w-[20px] -mt-[20px] ml-[10px]">
          <img src="./images/Group.png" alt="" />
        </div>
        <div className="absolute h-[150px] aspect-square mt-[150px]">
          <img src="./images/Nube_Dos.png" alt="" />
        </div>
        <div className="absolute h-[150px] mt-[250px]">
          <img src="./images/Nube_Tres.png" alt="" />
        </div>
      </section>

      <form className="-mt-[20px]">
        <section className="">
          <div>
            <img
              className="mt-[100px] ml-[200px]"
              src="./images/Ellipse_Cuatro.png"
              alt=""
            />
            <img
              className="-mt-[10px] ml-[60px]"
              src="./images/Ellipse_Tres.png"
              alt=""
            />
            <img
              className="-mt-[10px] ml-[40px]"
              src="./images/Astronauta.png"
              alt=""
            />
            <img
              className="-mt-[190px] ml-[20px]"
              src="./images/Ellipse_Dos.png"
              alt=""
            />
            <img
              className="mt-[80px] ml-[60px]"
              src="./images/Ellipse_Uno.png"
              alt=""
            />
          </div>
        </section>
      </form>
      <section className="">
        <div className="grid gap-6 mt-[80px] justify-center item center">
          <p className="text-[35px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto gap-2">Hi! <span className="text-white">I’am a backend developed</span>
          </p>
          <p className="text-white font-sen-sen text-[15px] ml-3 mr-3 mx-auto">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>
      </section>

      <Buttosn />
      <Last_Proyects />
      <Footer />
      <Contact />
    </main>
  );
};
export default Nav;
