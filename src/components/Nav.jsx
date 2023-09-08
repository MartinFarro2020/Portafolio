import Buttons from "./Buttons";
import Contact from "./Contact";
import Footer from "./SobreMi";
import Header from "./Header";
import Last_Proyects from "./Last_Proyects";

const Nav = () => {
  return (
    <main className="h-screen" >
      <form className="grid relative bg-black" id="home">
        <header className="fixed w-full" >
          <nav className="grid justify-Center bg-black h-[40px] text-gray-100 invisible sm:visible">
            <ul class="flex justify-Center items-center gap-4 mx-auto text-[12px] sm:text-[17px] sm:gap-10">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#proyects">Proyects</a>
              </li>
              <li>
                <a href="#buttons">About me</a>
              </li>
              <li>
                <a href="#contact">Contact me</a>
              </li>
              <li>
                <a href="#sobremi">Sobre Mi</a>
              </li>
            </ul>
          </nav>
        </header>
      </form>
      
    </main>
  );
};
export default Nav;
