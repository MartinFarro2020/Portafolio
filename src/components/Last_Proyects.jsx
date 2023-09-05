const Last_Proyects = () => {
  return (
    <form className="h-screen pt-[60px] mb-[100px]">
      <section className="grid gap-10">
        <div className="grid gap-6 justify-center item center">
          <p className="text-[35px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto">Last Landing <span className="text-white">and web site proyects</span>
          </p>
          <p className="text-white font-sen-sen text-[15px] ml-3 mr-3 mx-auto">
            I’m probably the most passionate developer you will ever get to work
            with. If you have a great project that needs some amazing skills,
            I’m your guy.
          </p>
        </div>

        <div className="relative grid justify-center items-center">
          <img className="w-[250px]" src="./images/Mask_Group.png" alt="" />
          <img
            className="absolute w-[160px] mt-[140px] ml-[100px]"
            src="./images/Ellipse_left.png"
            alt=""
          />
          <img
            className="absolute w-[150px] -mt-[20px] ml-[90px]"
            src="./images/movil.png"
            alt=""
          />
        </div>
      </section>
    </form>
  );
};
export default Last_Proyects;
