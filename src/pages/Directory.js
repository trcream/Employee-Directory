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
    search: "",
    searchType: "",
    sort: "",
  };
  updateSearch = (search) => {
    console.log(search);
    this.setState({ search });
  };

  // updateSearchType = (searchType)=>{
  //   this.setState({searchType})
  // }

  updateSort = (sort) => {
    this.setState({ sort });
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res.data.results[0]);
      this.setState({ users: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <SearchForm updateSearch={this.updateSearch} />
          </Card>
          <UserTable
            users={this.state.users}
            search={this.state.search}
            sort={this.state.sort}
            updateSort={this.updateSort}
          />
        </Container>
      </div>
    );
  }
}

export default Directory