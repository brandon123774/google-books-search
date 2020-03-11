import React, { Component } from "react";
import API from "../utils/APi";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Save extends Component {

    // saved books
    state = {
        savedBooks: []
    };

    // loads saved books when Saved page is opened
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
                            <List>
                                {this.state.savedBooks.map(book => {
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

export default Save;