import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/Table.css";

function Table() {
     const [data, setData] = useState();

     const [id, addId] = useState("")
     const [title, addTitle] = useState("")
     const [completed, addCompleted] = useState(false)

     useEffect(() => {
          async function get() {
               await axios({
                    url: "https://jsonplaceholder.typicode.com/todos",
                    method: "get",
                    headers: {
                         "Content-Type": 'application/json',
                         "Accept": "*"
                   } 
               })
               .then(res => setData(res.data))
               .catch(error => console.log(error))
          }

          get()
     }, [])

     const postData = async () => {

          await axios({
               url: "https://jsonplaceholder.typicode.com/todos",
               method: "post",
               headers: {
                    "Content-Type": 'application/json',
                    "Accept": "*"
               },
               data: {
                    id: id,
                    title: title,
                    completed: completed
               }
          })
          .then(res => console.log(res))
          .catch(error => console.log(error))
     }

     return (
          <div>
               {/* <table>
                    <thead>
                         <tr>
                              <td>ID</td>
                              <td>Title</td>
                              <td>Completed</td>
                         </tr>
                    </thead>
                    <tbody>
                         {data?.map((adata, i) =>
                              <tr key={i}>
                                   <td>{adata.id}</td>
                                   <td>{adata.title}</td>
                                   <td>{adata.completed == true ? "true" : "false"}</td>
                              </tr>
                         )}
                    </tbody>
               </table> */}

               <form onSubmit={postData} method="post" style={{display: "grid"}}>
                    <input placeholder="ID" type="text" onChange={(e) => addId(e.target.value)}/>
                    <input placeholder="Title" type="text" onChange={(e) => addTitle(e.target.value)}/>
                    <input placeholder="Completed" type="" onChange={(e) => addCompleted(true)}/>
                    <input style={{backgroundColor: "blue", color: "white", fontSize: "30px"}} type="submit"/>
               </form>
          </div>
     )
}

export default Table;