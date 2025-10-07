import LangIcon from "../assets/LangIcon"

function Login() {
  return (
    <main className="flex flex-col items-center gap-10">

      
      <h1 className="bg-blue-500 w-full text-3xl">Task hero</h1>
      
      <section className="flex flex-col items-center gap-3">
        <div className="text-center text-2xl">Bienvenido</div>
        <LangIcon src="public/svg/user-solid-full.svg" alt="Profile" background="bg-gray-300 rounded-full"/>
        <input className="border-1" type="text" name="username" id="username" placeholder="Introduzca su nombre"/>
      </section>

      <section >
        <h2 className="text-center text-xl">Idioma</h2>

        <div>
          <LangIcon src="/svg/spain.svg" alt="Spanish icon" onClick={()=> console.log("es")}/>
          <LangIcon src="/svg/uk.svg" alt="English icon" onClick={()=> console.log("en")}/>
        </div>

      </section>

    </main>

  )
}

export default Login