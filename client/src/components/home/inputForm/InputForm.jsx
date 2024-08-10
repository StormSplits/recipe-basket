import { useState } from "react"
import { InputLoader } from "./InputLoader"
import { InputQuestion } from "./InputQuestion"

export const InputForm = () => {
    const [progress , setProgress] = useState(0);


  return (
    <>
    <InputLoader progress = {progress} setProgress ={setProgress}/>
    <InputQuestion progress = {progress} setProgress ={setProgress} />

    </>
  )
}
