import React from "react";
import Card from './card';

const CardList = ({robots}) =>{

// const CardComponent = robots.map((user,i) => {
// return (<Card 
//     key={i} 
//     id={robots[i].id} 
//     name={robots[i].name} 
//     email={robots[i].email} 
//     username={robots[i].username}/>)
// })
    return(<div>
        {robots.map((user,i) => {
            return (<Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            username={robots[i].username}
            />);
            }
          )
        }
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} username={robots[3].username}/>
    <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} username={robots[4].username}/> */}
        </div>
    );
}

export default CardList