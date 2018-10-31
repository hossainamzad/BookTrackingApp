import React from 'react'
import SearchPage from './SearchPage'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
   books: []
  }
  // get the books from BookAPI
  // once you have the data, send this data (books) to
  // the shelf component to display
  componentDidMount() {
  BooksAPI.getAll()
   .then((books) => {
      this.setState({
        books
      })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll()
   .then((books) => {
      this.setState({
        books
      })
    })
  }
 render() {
  return (
      <div className="app">
      <Route exact path="/" render={() => (
        <Shelf
          books={this.state.books}
          moveShelf={this.moveShelf}
        />
      )}/>
      <Route path="/SearchPage" render={() => (
        <SearchPage
          moveShelf={this.moveShelf}
          books={this.state.books}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
{/*Credit to Maeva-- for a wonderful walkthrough. I folowed her code.*/}
