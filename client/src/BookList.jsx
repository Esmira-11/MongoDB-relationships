import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BookList() {
    const [books,setbooks] = useState([])


    useEffect(() => {
        const getItemList = async () => {
            try{
                const res = await axios.get('http://localhost:3008/api/books')
                setbooks(res.data)
              }
            catch(err){
                console.log(err)
            }
        }
        getItemList()
    },[]);

    
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>PublishDate</th>
                <th>AddDate</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.publishDate}</td>
                            <td>{item.addDate}</td>
                        </tr>
                    )
                })

            }
        </tbody>
    </table>
    </>
    )
}

export default BookList