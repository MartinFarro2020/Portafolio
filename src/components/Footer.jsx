const Footer = () => {
  return (
    <form className="h-screen pt-[40px] mb-[100px]">
      <section className="grid gap-10">
        <div className="grid gap-6 justify-center item center">
          <p className="text-[35px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto">Build<span className="text-white"> a whole new world</span>
          </p>
          <p className="text-white font-sen-sen text-[15px] ml-3 mr-3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.
          </p>
        </div>

        <div className="relative grid justify-center items-center">
          <img className="w-[250px]" src="./images/Mask_Group.png" alt="" />
          <img
            className="absolute w-[160px] mt-[160px] ml-[50px]"
            src="./images/Ellipse_Right.png"
            alt=""
          />
          <img
            className="absolute w-[150px] -mt-[20px] ml-[90px]"
            src="./images/text_computer.png"
            alt=""
          />
        </div>
      </section>
    </form> 
  )
}
export default Footer