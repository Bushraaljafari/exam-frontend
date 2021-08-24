import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios');

class Home extends React.Component {
constructor(props){
  super(props)
  this.state={
    flowerArr:[],
  }
}

  componentDidMount()=>{
const {user,isAuthenticated} = this.props.auth0;
if(isAuthenticated){
let resData= await axios.get(`${process.env}/allFlowers`)
this.setstate({flowerArr:resData})
}

}
function addFlower(flower) {
  const {user,isAuthenticated} = this.props.auth0;
  await axios.get(`${process.env}/addFlowers/${user.email}`)
  this.setstate({flowerArr:resData.flower})
}
  render() {
    return (
      <>
        <h1>API Flowers</h1>
      </>
      <div>
        {this.state.resData.map(flower=>{
          return(
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={flower.photo} />
  <Card.Body>
    <Card.Title>{flower.name}</Card.Title>
    <Card.Text>
      {flower.instructions}
    </Card.Text>
    <Button variant="primary"onClick={()=>{this.state.addFlower(flower)}}>Add-to-favorite</Button>
  </Card.Body>
</Card>
          )
        })}
      </div>
    );
  }
}

export default withAuth0(Home);
