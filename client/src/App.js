import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Feed } from '../src/components/loadermore'

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
                  <div>Testando quebra de linha<br /> GABI SUBIU</div>
                  <div class="container">
                  <div class="testeleo">    
                        <Feed> Box 1 </Feed> 
                  </div>
                  </div>
                        </div>
                  <div>Fim do teste</div>
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
        
          );
        }}
      </Query>
    );
  }
}

export default App;
