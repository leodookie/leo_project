import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Loadermore } from '../src/components/loadermore'

const GET_BOOKS = gql`
  {
    books {
      _id
      title
      author
    }
  }
`;

class App extends Component {

  render() {
    return (
      <Query pollInterval={500} query={GET_BOOKS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
    
          return (
            <div className="container">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    LIST OF BOOKS
                  </h3>
                  <div>Testando quebra de linha<br />Testando</div>
                  <div class="container">
  <div class="flex">
    <div class="content">Box 1</div>
    <div class="content">Box 2</div>
    <div class="content">Box 3</div>
    <div class="content">Box 4</div>
    <div class="content">Box 5</div>
    <div class="content">Box 6</div>
    <div class="content">Box 7</div>
    <div class="content">Box 8</div>
    <div class="content">Box 9</div>
    <div class="content">Box 10</div>
    <div class="content">Box 11</div>
    <div class="content">Box 12</div>
    <div class="content">Box 13</div>
    <div class="content">Box 14</div>
    <div class="content">Box 15</div>
    <div class="content">Box 16</div>
  </div>
  
  <a href="#" id="loadMore">Load More</a>
</div>
<div>Fim do teste<br />Testando</div>
                  <h4><Link to="/create">Add Book</Link></h4>
                  <h4><Link to="/create_cliente">Adiciona Cliente</Link></h4>
                </div>
                <div className="panel-body">
                  <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Author</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.books.map((book, index) => (
                        <tr key={index}>
                          <td><Link to={`/show/${book._id}`}>{book.title}</Link></td>
                          <td>{book.author}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default App;
