const Contact = () => {
  return (
    <section className="grid h-screen mt-[40px]" id="contact">
      <section className="mx-auto justify-center items-center">
        <div className="grid py-20 text-center w-[250px] h-[400px] bg-zinc-800 rounded-3xl items-center sm:w-[890px] sm:h-[370px]">
          <p className="text-[35px] font-semibold text-[#9BA4ED] mx-auto sm:text-[48px] sm:text-white">Contact me!</p>
          <p className="text-white mx-4 font-sen-sen text-[15px] sm:text-[14px] sm:w-[470px] sm:h-[34px] sm:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus ac ipsum sed rhoncus. Nam euismod auctor ipsum.</p>
          <button className="text-white border-2 border-white w-[95px] rounded-md mx-[80px] sm:mx-auto">Click Here</button>
        </div>  
        <div className="absolute h-[28px] w-[97px] sm:[url(/images/Nube_desk_cinco.png)] sm:w-[300px] sm:h-[500px]"></div>
      </section>
    </section> 
  )
}
export default Contact