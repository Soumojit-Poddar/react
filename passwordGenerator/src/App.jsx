import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length,numberAllowed,charAllowed,setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopyBtnText(<i class="fa-regular fa-clipboard"></i>);

    // Reset back to copy icon after 2 seconds
    setTimeout(() => {
      setCopyBtnText(<i className="fa-regular fa-copy"></i>);
    }, 2000);
  },[password])

  const [copyBtnText, setCopyBtnText] = useState(<i className="fa-regular fa-copy"></i>);


  useEffect(()=>{passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-7"
      >Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input 
          type="text"
          className="outline-none w-full py-1 px-3"
          value={password}
          placeholder="Password"
          readOnly 
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className="outline-none font-bold px-3 py-1 text-lg bg-gray-800"
          >{copyBtnText}</button>
        </div>
        <div className="flex text-sm gap-x-2 mt-7 justify-between">
          <div className="fles items-center gap-x-1 justify-center">
            <input type="range" min={6} max={20} value={length} 
              className="cursor-pointer accent-orange-400 mr-1" 
              onChange={(e)=>{setLength(e.target.value)}}/>

            <label className="font-semibold">Length: {length}</label>
          </div>

          <div className="flex text-sm gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" 
            className="accent-orange-400"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev)
            }}/>
            <label className="font-semibold" htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="characterInput"
              className="accent-orange-400"
              onChange={() => {
                setCharAllowed((prev) => !prev )
              }}/>
            <label className="font-semibold" htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
