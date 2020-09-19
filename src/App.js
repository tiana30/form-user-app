import React, {useState, useEffect} from 'react';
import './App.css';
import Datatable from './datatable';

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ ] = useState("");
  const ApiUrl = "https://gorest.co.in/public-api/users";
  useEffect(() => {
    fetch(ApiUrl)
    .then((response) => response.json())
    .then(responseJson => {
      if(responseJson.data) {
          return Promise.resolve(setData(responseJson.data)
        );
          
      } else {
          return Promise.reject(`data is not found`);
      }
    });
    
  }, []);
  console.log(data);
  
  return (
    <div>
    <div>This is for filter</div>
    <Datatable data = {data} />
      
    </div>
  );
}

