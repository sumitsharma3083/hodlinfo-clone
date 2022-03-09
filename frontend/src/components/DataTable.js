import React, { useEffect, useState } from 'react'


const fetchData = async ()=>{
    const data = await fetch('http://localhost:8080/v1/api/access',{
        method : "GET",
        headers : {
            "Content-type" : "Application/json"
        }
    })
    const result = await data.json();
      return result 
}



const DataTable = () => {
    const [data, setData] = useState([])
    let srNum = 0
  useEffect(async () => {
      const mydata = await fetchData();
       setData(mydata)
  },[])
  


    return (
        <div className='mt-5' style={{width : "80%" , margin : "auto"}}>
            <table className="table table-borderless table-responsive-sm" style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last</th>
                        <th scope="col">Buy/Sell Price</th>
                        <th scope="col">Volume</th>
                        <th scope="col">base_unit</th>
                    </tr>
                </thead>

                <tbody>
                    {
                            data.map(item =>{
                                srNum += 1 ;
                                return(
                                    <tr className='mt-5' style={{color:"#fff" , backgroundColor: "#3e4457" ,borderRadius:"10px"}}>
                                    <td scope="row">{srNum}</td>
                                    <td>{item.name}</td>
                                    <td>₹{item.last}</td>
                                    <td>₹{item.buy}/₹{item.sell}</td>
                                    <td>{item.volume}</td>
                                    <td>{item.base_unit}</td>
                                </tr>
                                )
                            })
                    }
                </tbody>


            </table>
        </div>
    )
}

export default DataTable