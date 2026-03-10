import React from 'react'
import { useState } from 'react'

function Task_1() {
    // const fruits = ["Apple", "Banana", "Mango"];
    // const fruits = [
    //     { id: 1, name: "Apple" },
    //     { id: 2, name: "Banana" },
    //     { id: 3, name: "Mango" }
    // ]

    // const product = [
    //     { id:1,name: "product_1", price: 100 },
    //     { id:2,name: "product_2", price: 200 },
    //     { id:3,name: "product_3", price: 300 }
    // ]

    // const tasks = [
    //     {id:1,name: "Rect_Task", done:true},
    //     {id:1,name: "Rect_Task2", done:true },
    //     {id:1,name: "Rect_Task3", done:false }
    // ]

    // const [items] = useState([
    //     {name: "product_1"},
    //     {name: "product_2"},
    //     {name: "product_3"},
    // ])

    const items = [""]

    function add() {
        const input = document.getElementById("inp");
        const value = input.value;

        const li = document.createElement("li");
        li.innerText = value;

        document.getElementById("list").appendChild(li);

        input.value = "";
    }

    // const items = ["Kavy","Het","Harsh"]

    // function Remove() {
    //     const input1 = document.getElementById("inp");
    //     const value1 = input1.value

    //     const li1 = document.removeElement("li");
    // }
    return (
        <>
            {/* <ol>
                {fruits.map((fruits) => (
                    <li key={fruits.id}>{fruits.name}</li>
                ))}
            </ol> */}
            {/* {product.map((product)=> (
                <div kay = {product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
            )
            )} */}
            {/* {tasks.map((tasks)=> (
                <div kay = {tasks.id}>
                    <h3>{tasks.name}</h3>
                    <p>{tasks.price}</p>
                    <p>{tasks.done ? <span>Completed</span> : <span>Not Completed</span>}</p>
                </div>
            )
            )} */}

            {/* {items.map((items,index)=>(
                <div kay = {index}>
                    <p>{items.name}</p>
                </div>
            ))} */}

            


            {/* <input type="text" id='inp' /> */}
            {/* <button onClick={Remove}>Remove</button>
            <ul id='list'>{items}</ul> */}

           
        </>
    )
}

export default Task_1

