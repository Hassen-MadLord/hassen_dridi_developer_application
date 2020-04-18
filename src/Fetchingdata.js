import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import './Fetchingdata.css';

function Fetchingdata(){
    const [data, setData] = useState([])
    useEffect(() =>{
      axios.get("https://sheet.best/api/sheets/7add42a9-8740-4e0e-aa03-4f1c2e6ef22d")
      .then( res => {
            console.log(res)
          setData(res.data)
        
      })
      .catch(err =>{
          console.log(err)

      })
    },[]) 

    return(
 <div className="container" >
        { 
        data.map( list => 
         <p>   Id: {list.id}<br></br>
               Name:  {list.name}<br></br>
               SurName:  {list.surname}<br></br>
               Gender: {list.gender}<br></br>
               Email:  {list.email}<br></br>
               Phone number: {list.phone_number}<br></br>
               Opportunity link: {list.url}<br></br>
               Year of study:  {list.year_of_study}<br></br>
               University:  {list.university}<br></br>
               Communication preference: {list.communication_preference}<br></br>
               Manager: {list.manager}  <br></br>
               <img src={list.manager_cover_photo}></img><br></br>
               status:  {list.status}


          </p>
          )
        }   
</div>         
       )
}       
export default Fetchingdata
