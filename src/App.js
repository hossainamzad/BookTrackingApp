import React from 'react'
import SearchPage from './SearchPage'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
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
 render() {
  return (
      <div className="app">
        <Shelf books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
