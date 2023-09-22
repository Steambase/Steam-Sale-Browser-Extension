import { useState } from "react"
import "./styles.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="flex flex-col w-96 h-96 bg-slate-900">
      <h2 className="text-white">
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      {/* <input onChange={(e) => setData(e.target.value)} value={data} /> */}
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
