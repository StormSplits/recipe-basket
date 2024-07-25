import { useContext } from "react"
import promptDataContext from "../../../context/PromptDataContext"
import axios from "axios";

export const InputQuestion = (props) => {
    
    let index = props.progress ;

    const question =["What's in your pantry?","Do you have any dietary needs or preferences?","What kind of food are you craving?","What's the occasion?","How much time do you have to spare?","How would you rate your cooking skills?","Are there any food allergies or intolerances I should be aware of?","What kitchen tools do you have at your disposal?","Do you prefer quick and easy recipes or are you up for a challenge?","How many people are you cooking for?"];
    const hint = ["Please list the ingredients you have at home","e.g., vegetarian, gluten-free and non-vegetarian ","e.g., Italian, Mexican, Chinese","e.g., Breakfast, lunch, dinner, or snack ideas","e.g., less than 30 minutes or more than an hour","e.g., beginner, intermediate, advanced","e.g., nut-allergy, curd-allergy, etc","e.g., blender, slow cooker, oven","No or Yes (If yes, then please mention the challenge) ","e.g., 1 or 2"];
    const name = ['ingredients','dietaryNeeds','craving','occasion','time','skill','allergies','tools','preference','servings'];
    const {promptData , setPromptData} = useContext(promptDataContext);

    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        console.log(promptData)

        try{
          const res = await axios.post("http://127.0.0.1:8000/api/v1/app/chat",{ body : JSON.stringify(promptData)});
          console.log(res);

        }catch(err){
          console.log(err);
        }
      }

    
    const onClickHandler = (e) =>{
        e.preventDefault()
        props.setProgress(index+1);
    }
  return (
    <form onSubmit={onSubmitHandler}>
    <label>
        {question[index]}
        <br />
        <input type="text" name={String(name[index]).trim()} required={index===0 || index === 9}  value={promptData[name[index]] || ""} placeholder={hint[index]} onChange={(e) => setPromptData({ ...promptData, [e.target.name]: e.target.value })} />
      </label>
      <br />
      <div className="inputButtonDiv">
        {index>0 && index < 9 && <button className="skip" onClick={onClickHandler}>Skip</button>}
      {index<9 && <button className="next" onClick={onClickHandler} disabled={index===0 &&promptData[name[0]].length <3}>Next &nbsp; <i className="fa-solid fa-check checkCenter"></i></button>}
      {index === 9 && <button className="next" type="submit">Show Recipies</button>}
      </div>
    </form>
  )
}
