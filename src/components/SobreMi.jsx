const SobreMi = () => {
  return (
    <main className="bg-black mt-[600px] sm:-mt-[1400px] " id="sobremi">
    <section className="">
      <section className="grid grid-row gap-10 mx-[6px] sm:flex sm:gap-5">

        <div className="gap-6 mt-[100px] justify-center pl-3 mx-2 item center sm:ml-[200px] sm:mt-[300px]">
          <p className="text-[25px] font-semibold text-[#9BA4ED] ml-2 mr-2 mx-auto sm:w-[500px] sm:h[50px]">
            Hola soy Martin Farro<span className="text-white text-[23px]"> estudiante de Acadelmo</span>
          </p>
          <p className="text-white font-sen-sen text-[15px] ml-2 mr-3 mx-auto sm:w-[400px] sm:h-[100px]">
            Me estoy formando como desarrollador Front-end creando proyectos utilizando herramientas de programación. 
          </p>
        </div>

        <div className="flex flex-col items-center border-[2px] rounded-lg sm:mt-[200px] sm:justify-center sm:px-4">
          <p className="text-[#9BA4ED] font-sen-sen font-semibold text-[30px]">Datos Personales</p>
          <p className="text-[#9BA4ED]">Telefono</p><span className="text-white">955482740</span>
          <p className="text-[#9BA4ED]">email</p><span className="text-white">martin.farro.martinez@gmail.com</span>
          <p className="text-[#9BA4ED]">Dirección</p><span className="text-white">Chiclayo, Perú</span>
        
        </div>
      </section>
    </section>
    </main>
    
  );
};
export default SobreMi;
