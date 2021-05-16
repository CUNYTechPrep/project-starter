import React from 'react';
import { Redirect } from 'react-router-dom';
import ThreadStarterTable from '../components/Forum/ForumStarterTable';
import '../css/ForumCategoryTable.css';
import auth from '../services/auth';

class ForumPage extends React.Component  {
    state = {
      error: false,
      success: false,
      category: '',
      threadTitle: '',
    }
  
    contentChanged = (name) => {
      return (event) => {
        let { value } = event.target;
        this.setState({ [name]: value });
      }
    }
  
    postThread = (event) => {
      if(auth.isAuthenticated){
      fetch("/api/forum/", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: this.state.category,
          threadTitle: this.state.threadTitle,
        }),
      })
        .then(res => res.json())
        .then(post => {
            if(auth.isAuthenticated){ 
            this.setState({
              success: true,
            });
          }
        })
        .catch(err => {
          this.setState({
            error: true,
          });
        });
      }
    }
  
  render() {
    let errorMessage = null;
    if(!auth.isAuthenticated) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post. Are you logged in?"
        </div>
      );
    }
      return (
        <div className="div-heading">
          <form>
            <div className="thread-create">
              <input 
                placeholder="Enter Thread Title"
                maxLength="70"
                minLength="3"
                className="thread-new"
                value={this.state.threadTitle}
                onChange={this.contentChanged('threadTitle')}
                />
              <input 
                placeholder="Enter Thread Category"
                maxLength="20"
                minLength="3"
                className="thread-new"
                value={this.state.category}
                onChange={this.contentChanged('category')}
              />
              <button className="new-thread-button" type="submit" onClick={this.postThread}> 
                Post New Thread
              </button>
            </div>
          </form>

          <ThreadStarterTable />
        </div>
      );
    }
}

export default ForumPage;
