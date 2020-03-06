import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/APi";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    q: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleInput = event => {
    console.log("event.target.title", event.target.value)
    this.setState({ q: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.searchBooks()

  }
  searchBooks = () => {
    console.log(this.state.q)
    API.getBooks(this.state.q)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {/* <Jumbotron>
              <h1>Google Books</h1>
            </Jumbotron> */}
            <form>
              <Input name="title" placeholder="Title (required)" onChange={this.handleInput} value={this.state.q} />
              {/* <Input name="author" placeholder="Author (required)" />
              <TextArea name="description" placeholder="Description" />
              <Input name="image" placeholder="Image" />
              <Input name="link" placeholder="Link" /> */}

              <FormBtn submit={this.handleSubmit}> Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Book List</h1>
            </Jumbotron> */}
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem
                    key={book.id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    link={book.volumeInfo.infoLink}
                    description={book.volumeInfo.description}
                  >
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
