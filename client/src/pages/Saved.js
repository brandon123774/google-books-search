import React, { Component } from "react";
import API from "../utils/APi";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {

    // saved books
    state = {
        books: []
    };

    // loads saved books when Saved page is opened
    componentDidMount() {
        this.getSavedBooks();
    };

    // loads books from db
    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => 
                this.setState({ 
                    books: res.data 
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = async id => {
        const originalBooks = this.state.books;
        try {
          await API.deleteBook(id).then(res => this.getSavedBooks());
        } catch (ex) {
          if (ex.response && ex.response.status === 404)
          this.setState({ books: originalBooks });
        }
      };
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <List>
                                {this.state.books.map(book => {
                                    return (
                                        <ListItem
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            authors={book.authors}
                                            link={book.link}
                                            description={book.description}
                                            loadBooks={this.loadBooks}
                                        />
                                    );
                                })}
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Saved;