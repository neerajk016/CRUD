import { set } from 'firebase/database';
import React,{useState,useEffect} from 'react';
import firebaseDB from '../Firebase';
import { ref,remove } from "firebase/database";
import { child,push } from 'firebase/database';
import {onValue} from "firebase/database";
import { useNavigate } from "react-router-dom"



const Home = () => {
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })

    const history = useNavigate()

    const [getData,setGetData] = useState({});
    useEffect(() =>{


      const db = ref(firebaseDB, 'register/');
      onValue(db, (details) => {
        // console.log(details.val())
        setGetData(details.val())
        
      });
    },[])







    
   
    const {firstname,lastname,email} = {...data}

    const changeHandler = async(e) =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        
        try{
          // console.log(data);

          const userid=push(child(ref(firebaseDB),"register")).key;

          var dataAdded=await set(ref(firebaseDB,"register/"+userid),{data});
          alert("data added")
        }catch(err){
          if(err){
            console.log(err.message)
          }
        }
        setData({
          firstname:"",
          lastname:"",
          email:"",

        })
        
        
    }

    const deleteHandler = item => {
      try{
        remove(ref(firebaseDB, 'register/'+item));
      }catch(err){
        if(err){
          console.log(err.message)
        }
      }
      
      
      
  }





    return (
        <div>
        <h2 style={{"textAlign":"center"}}>Register Form</h2><br />
        <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
            <label className="control-label col-sm-2">First Name:</label>
            <div className="col-sm-4">
                <input type="text" className="form-control"placeholder="First Name" name="firstname" value={firstname} onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">
            <label className="control-label col-sm-2">Last Name:</label>
            <div className="col-sm-4">          
                <input type="text" className="form-control" placeholder="Last Name" name="lastname" value={lastname} onChange={changeHandler}/>
            </div>
            </div>

            <div className="form-group">
            <label className="control-label col-sm-2">Email:</label>
            <div className="col-sm-4">          
                <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email}   onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" className="btn btn-success" 
                value="Submit" />
            </div>
            </div>
    </form>
    <div>
      {getData &&
      
      Object.keys(getData).map((item,value)=>
      <div className="border" key={value}>
        <p>FirstName : {getData[item].data.firstname}</p>
        <p>LastName : {getData[item].data.lastname}</p>
        <p>Email : {getData[item].data.email}</p>
        <button className="btn btn-danger" onClick={() => deleteHandler(item)} >Delete</button>
        <button className="btn btn-success" onClick={() => history(`/edit?firstname=${getData[item].data.firstname}&lastname=${getData[item].data.lastname}&email=${getData[item].data.email}&key=${item}`)}>Update</button> &nbsp;

      </div>)
      // console.log(getData[item].data.email)
      
      
      
      }
      

    </div>
    
        </div>
        
    )
}

export default Home;
