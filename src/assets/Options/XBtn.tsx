function XBtn({onclick}:{onclick:()=>void}) {
  return (
    <button className="w-8" onClick={onclick}>
        <img src="/svg/x-button.svg" alt="X button" />
    </button>
  )
}

export default XBtn