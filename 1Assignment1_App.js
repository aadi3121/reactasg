// Create a react component to display student details in table format  (Single Student)
//a. Student Details :   sid, sname, course, age, total

import logo from './logo.svg';
import './App.css';

function App() {
  // Scalar Variables
  let StudentID = 101;
  let Studentname = "Aaditya";
  let Course= "B.Tech";
  let age = 22;
  let email = "aasd@gmail.com";

  return(
<>

<div>
<table border="2"  width="500">
<tr>
<td colspan="2" align='center'>
              Student Details
</td>
</tr>
<tr>
<td>Student Id:</td>
<td>{StudentID}</td>
</tr>
<tr>
<td>Name of Student:</td>
<td>{Studentname}</td>
</tr>
<tr>
<td>Course assigned :</td>
<td>{Course}</td>
</tr>
<tr>
<td>Age of the student :</td>
<td>{age} </td>
</tr>
<tr>
<td> Email :</td>
<td>{email}  </td>
</tr>


        </table>
</div>
<hr/>
</>
  
  );

}

export default App;