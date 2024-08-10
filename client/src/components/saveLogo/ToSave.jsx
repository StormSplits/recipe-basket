import { useContext, useState } from 'react';
import ToSaveLogo from '../../graphicalContent/toSaveLogo.svg'
import  Saved from '../../graphicalContent/saveLogo.svg'
import promptDataContext from '../../context/PromptDataContext';

const AddToSave = ({data}) =>{


    const {user, setUser} = useContext(promptDataContext);

    const [clicked, setClicked ] = useState(false);

    const handleclick = async () =>{
        const url = 'https://recipe-server-production-a53b.up.railway.app/api/v1/app/save';
    
        let res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"foodData":data, "user": user})
        })
        res = await res.json();
        if(res.ok){
            const user_id = res.user_random_id;
            if(user_id !== user){
                localStorage.setItem('user', user_id);
                setUser(user_id);
            }
            setClicked(true);
        }

    }

    
    return (
       <div style={{position:"absolute",right:"1.4rem", top:"1.4rem"}}>
            {clicked ?(
                <button style={{backgroundColor:"transparent", border:"none", cursor:"pointer",display:"flex",justifyContent:"center", alignItems:"center", color:"#FF770B"}}>
                    <img src={ Saved} alt=''/>
                    Saved
                </button>

            ) :(
                <button onClick={handleclick} style={{backgroundColor:"transparent", border:"none", cursor:"pointer"}}>
                    <img src={ ToSaveLogo} alt=''/>
                </button>
            )
            }

       </div>
    )
}

export default AddToSave ;