import Mailer from "./mailer";

const Contact = () => {

  const handlesubmit = () => {
   return 
  }
  
  return (
    <main className="bg-black mt-[100px] sm:mt-[50px]" id="contact">
      <section className="grid">
        <section className="grid mt-[250px] mb-[200px] mx-auto justify-center items-center sm:mt-[300px] sm:mb-[300px] ">
          <div className="grid text-center w-[250px] h-[1000px] bg-zinc-800 rounded-3xl items-center -mt-[150px] sm:w-[890px] sm:h-[370px]">
            <p className="text-[35px] font-semibold text-[#9BA4ED] mx-auto sm:text-[48px] sm:text-white">
              Contact me!
            </p>
            <div>
              <Mailer />
            </div>
          </div>
          <div className="absolute h-[28px] w-[97px] sm:[url(/images/Nube_desk_cinco.png)] sm:w-[300px] sm:h-[500px]"></div>
        </section>
      </section>
    </main>
  );
};
export default Contact;
