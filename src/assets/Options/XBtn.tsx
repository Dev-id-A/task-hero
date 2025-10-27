function XBtn({onclick}:{onclick:()=>void}) {
  return (
    <div className="flex justify-end">
      <button className="w-8 border-1 rounded-full bg-gray-300" onClick={onclick}>
          <img src="/svg/x-button.svg" alt="X button" />
      </button>
    </div>
  )
}

export default XBtn