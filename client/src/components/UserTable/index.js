import React from "react";
import {Table} from "react-bootstrap"

function UserTable({users, searchType, search, sort, updateSort }){

  //props.users.filter();

  //props.search

  const sortByLocation = (userA, userB) => {

   if (!sort)  return 0;
   

    const locationA = `${userA.location.city},${userA.location.state}`;
    const locationB = `${userB.location.city},${userB.location.state}`;

   
        if (locationA < locationB) {
          // if(sort ==="asc"){
          //    return -1;
          // }else{
          //   return 1
          // }
      return sort === "asc" ? -1: 1;
     }
     if (locationA > locationB) {
        return sort === "asc" ? 1 : -1;
     }
   
     return 0;
     
  }



  const filterBySearch = (user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    console.log(search);

    return (
     fullName.toLowerCase().includes(search.toLowerCase())
    );
  };

   return (
     <Table striped bordered hover>
       <thead>
         <tr>
           <th scope="col">First Name</th>
           <th scope="col">Last Name</th>
           <th scope="col">Email </th>
           <th scope="col">Phone #</th>
           <th scope="col">
             City
             <button onClick={() => updateSort("asc")}>Asc</button>
             <button onClick={() => updateSort("desc")}>Desc</button>
           </th>
         </tr>
       </thead>
       <tbody>
         {users
           .filter(filterBySearch)
           .sort(sortByLocation)
           .map((user) => {
             return (
               <tr key={user.id.value}>
                 <td>{user.name.first}</td>
                 <td>{user.name.last}</td>
                 <td>{user.email}</td>
                 <td>{user.phone}</td>
                 <td>
                   {user.location.city},{user.location.state}
                 </td>
               </tr>
             );
           })}
       </tbody>
     </Table>
   );

}

export default UserTable;