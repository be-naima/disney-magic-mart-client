import { useEffect, useState } from "react";
import SubCtagoryCard from "./SubCtagoryCard";


const SubCatagory = ({passCatagory}) => {
    
   
   const PrincessCatagory = []
   const SoftCatagory = []
   const ActionCatagory = []
   const [alltoys,setAlltoys] = useState([])
  
    useEffect(()=>{
        fetch('https://disney-magic-mart-server.vercel.app/toys')
        .then(res => res.json())
        .then(data =>setAlltoys(data) )
    },[])
   
    for(let i of alltoys){
        if(i.sub_catagory === passCatagory && passCatagory === 'Princess'){
           PrincessCatagory.push(i)
           
        }
        else if(i.sub_catagory === passCatagory && passCatagory === 'Soft Toy'){
          SoftCatagory.push(i)
        }
        else if(i.sub_catagory === passCatagory && passCatagory === 'Action'){
           ActionCatagory.push(i)
        }
    }
    
    
   
    return (
        <div className="grid md:grid-cols-2 grid-cols-1  py-10 shadow-xl">
            
            {
                passCatagory ==='Princess' ? PrincessCatagory.map(
                    catagory => <SubCtagoryCard
                        key={catagory._id}
                        catagory={catagory}
                    ></SubCtagoryCard>
                ) :  passCatagory ==='Soft Toy' ? SoftCatagory.map(
                    catagory => <SubCtagoryCard
                        key={catagory._id}
                        catagory={catagory}
                    ></SubCtagoryCard>
                ) :  passCatagory ==='Action' ? ActionCatagory.map(
                    catagory => <SubCtagoryCard
                        key={catagory._id}
                        catagory={catagory}
                    ></SubCtagoryCard>
                ) :''
            }
        </div>
    );
};

export default SubCatagory;