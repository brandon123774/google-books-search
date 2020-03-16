import React, { Component } from "react";
import API from "../utils/APi";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
// import {DeleteBtn} from "../components/DeleteBtn"
class Search extends Component {
  state = {
    books: [],
    //q stand in place for bookSearch
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
                <h3 text align="center">Books to Read</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
