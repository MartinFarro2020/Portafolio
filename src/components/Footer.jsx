const Footer = () => {
  return (
    <form className="h-screen pt-[40px] mb-[100px] mt-[560px]">
      <section className="grid gap-10 sm:flex">

        <div className="grid gap-6 justify-center item center sm:ml-[200px] sm:mt-[100px]">
          <p className="text-[35px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto sm:w-[500px] sm:h[100px]">
            Build<span className="text-white"> a whole new world</span>
          </p>
          <p className="text-white font-sen-sen text-[15px] ml-3 mr-3 mx-auto sm:w-[400px] sm:h-[100px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
            ac ipsum sed rhoncus. Nam euismod auctor ipsum.
          </p>
        </div>

        <div className="grid justify-center items-center mt-[140px] sm:-ml-[150px] sm:mt-[20px]">
          <div className="absolute h-[270px] w-[276px] mt-[60px] ml-[30px] bg-[url(./images/Mask_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:w-[505px] sm:h-[517px] sm:ml-[50px] sm:mt-[180px]"></div>

          <div className="absolute h-[53px] w-[183px] mt-[210px] ml-[20px] bg-[url(./images/Ellipse_left_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(./images/Ellipse_left_desktop.png)] sm:w-[340px] sm:h-[100px] sm:ml-[40px] sm:mt-[480px]"></div>

          <div className="absolute h-[230px] w-[160px] mt-[40px] ml-[90px] bg-[url(./images/Code_mobile.png)] bg-contain bg-right-top bg-no-repeat sm:[url(./images/Code_desktop.png)] sm:w-[300px] sm:h-[400px] sm:ml-[150px] sm:mt-[100px]"></div>
        </div>
      </section>
    </form>
  );
};
export default Footer;
