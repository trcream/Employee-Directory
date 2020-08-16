import React from "react";
import API from "../utils/api";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import {Container, Card} from "react-bootstrap"

class Directory extends React.Component {
   
    state = {
        name: "",
        role: "",
        manager: "",
        users: [],
        Search:""
    }
    updateSearch = (search) =>{
        this.setState({search})

    }

    componentDidMount(){
        API
            .getUsers()
            .then(res => {
                console.log(res.data.results[0]);
                this.setState({users: res.data.results})
            });
    }

    render(){

    return (
      <div>
        <Container>
          <Card>
            <SearchForm updateSearch={this.updateSearch} />
          </Card>
          <UserTable users={this.state.users} />
        </Container>
      </div>
    );
    }
    
}

export default Directory