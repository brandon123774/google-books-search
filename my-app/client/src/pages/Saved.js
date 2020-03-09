import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";

class Save extends Component {

    // saved books
    state = {
        savedBooks: []
    };

    // loads saved books when Saved page loads
    componentDidMount() {
        this.loadBooks();
    };

    // loads books from db
    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <BookList>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <BookListItem

                                            key={book.id}
                                            id={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            link={book.volumeInfo.infoLink}
                                            description={book.volumeInfo.description}
                                            loadBooks={this.loadBooks}
                                        />
                                    );
                                })}
                            </BookList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Save;