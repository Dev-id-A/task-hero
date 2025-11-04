function XBtn({onclick}:{onclick:()=>void}) {
  return (
    <div className="flex justify-end">
      <button className="w-8 rounded-full" onClick={onclick}>
          <img src="/svg/x-button.svg" alt="X button" />
      </button>
    </div>
  )
}

export default XBtn