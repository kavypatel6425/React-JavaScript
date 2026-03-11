import React from 'react'
import Header from './Componants/Header'
import Footer from './Componants/Footer'
import Greeting from './Componants/Greeting';
import Logo from './Componants/Logo';
import Navbar from './Componants/Navbar';
import Card from './Componants/Card';
import Button from './Componants/Button';
import UserProfile from './Componants/UserProfile';
import Counter from './Lecture-5/componamts/Counter';
import Toggle from './Lecture-5/componamts/Toggle';
import Profile from './Lecture-5/componamts/Profile';
import UserCard from './Lecture-5/componamts/UserCard';
import Locally from './Lecture-5/componamts/locally';
import Bgcolor from './Lecture-5/componamts/Bgcolor';
import Task_1 from './Lecture-6/Componants/task_1';
import Task_7 from './Lecture-6/Componants/Task_7';
import Task_10 from './Lecture-6/Componants/Task_10';
import Api_Task from './Api Task/Api_Task';
import Lecture_7 from './Lecture-7/Lecture_7';
import Lecture_8 from './Lecture-8/Lecture_8';
import Lecture_8_task from './Lecture-8/Componants/Lecture_8_task';
import Controlled from './Lecture-8/Componants/Controlled';
import Lecture_9 from './Lecture-9/Lecture_9';


function App() {
    return (
        <>
            {/* <Header /> */}
            {/* <Footer /> */}
            {/* <Greeting /> */}
            {/* <Logo /> */}
            {/* <Navbar /> */}
            {/* <Card /> */}
            {/* <Card title="React" description="A JavaScript library for building UI" /> */}
            {/* <Button text="Click me" /> */}
            {/* <UserProfile name="Kavy Patel" role="Frontend Developer" avatar="https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_user_personalization&w=740&q=80"/> */}
            {/* <UserProfile name="Het Patel" role="Backand Developer" avatar="https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_user_personalization&w=740&q=80"/> */}



            {/* <Counter/> */}
            {/* <Toggle/> */}
            {/* <Profile/> */}
            {/* <UserCard name= "Patel Kavy" age = {19} city = "Idar"/> */}
            {/* <Locally/> */}
            {/* <Bgcolor/> */}


            {/* <Task_1/>*/}
            {/* <Task_7/>
            <Api_Task/>  */}
            {/* <Lecture_7/> */}
            {/* <Lecture_8/> */}
            {/* <Lecture_8_task/> */}
            {/* <Controlled/> */}

            <Lecture_9/>
        </>

    )
}

export default App






// const employee = {
//   name: "Rahul",
//   role: "Frontend Developer",
//   isOnline: true,
//   salary: 50000,
//   // skills: [],
//   skills: ["HTML", "CSS", "JavaScript"],
//   experience: 2
// };
// export default function App() {
//   return (
//     <div>
//       {/* task-1  */}
//       <h1>Employee Profile</h1>
//       {/* task-2 */}
//       <p>Name:{employee.name}</p>
//       {/* task-3 */}
//       <p>Role:{employee.role}</p>
//       {/* task-4 */}

//       <p>Status: {employee.isOnline ? "Online" : "Offline"}</p>
//       {/* task-5 */}

//       <p>Year:{new Date().getFullYear()}</p>
//       {/* task-6 */}

//       <p>salary:{employee.salary}</p>
//       {/* task-7 */}

//       <p>Experience: {employee.experience}</p>
//       {/* task-8 */}

//       <p>pojisan : {employee.experience > 3 ? "Senior Developer" : "Junior Developer"}</p>
//       {/* task-9 */}

//       <h3>Skills:</h3>
//       <ul>
//         {employee.skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>

//       {/* task-10 */}
//       <button>Contact Employee</button>
//       {/* task-11 */}

//       <img src="https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/buniznjsevz9jdrbfbma.webp" alt="" />


//       {/* task-12 */}

//       <p style={{ color: employee.isOnline ? "green" : "red" }}>
//         {employee.isOnline ? "Online" : "Offline"}
//       </p>

//       {/* task-13 */}
//       <p>Total Skills: {employee.skills.length}</p>

//       {/* <p>Skill = { employee.skills.length}</p> */}

//       {/* task-14 */}

//       <p>Result: {employee.skills.length === 0 ? "No Skill" : employee.skills.length }</p>

//       {/* task-15 */}


//     </div>

//   )

// }




