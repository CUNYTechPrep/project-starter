import 'w3-css/w3.css'; 
import React from "react";
import '../../css/Popup.css';
import auth from '../../services/auth.js';
import ForumPage from '../../pages/ForumPage';
import { Link } from 'react-router-dom';
import { right } from '@popperjs/core';


class AddThreadPost extends React.Component {
  state = {
    failed: false,
    title: "",
    content: "",
  }
  
  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  postPostinThread = (event) => {
    event.preventDefault();
    // const { id } = the forumId of the Thread
    // fetch("/api/forum/"+id, {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     content: this.state.content,
    //     title: this.state.title,
    //     authorId: auth.currentUser.id,
    //     forumId: the id of the thread where post is being posted
    //   }),
    // })      
    //   .then(res => res.json())
    //   .then(user => {
    //     this.props.closePopup();
    //   })
    //   .then(post => {
    //       this.setState({
    //         success: true,
    //       });
    //       alert('Posted successfully!');    
    //   })
    //   .catch(err => {
    //     this.setState({
    //       error: true,
    //     });
    //   });
    
  }

  render() {
    return (
      <div className='popup-post'>
        <div className='popup_inner_post'>
          {/* <button 
            style={{borderRadius: 50, paddingLeft: 15, paddingRight: 30, paddingBlock: 20, backgroundColor: "#BE0909",
            display: "flex", fontSize: 15, width: 20, height: 20, float: right, top: 30}}> 
            X 
          </button> */}
          <div className="div-heading">
            <h1>
              Type out your FitPost!
            </h1>
            
            <div style={{paddingTop: 20}}>
              <form 
                onSubmit={this.postPostinThread}
              >
                <h3 class="text-muted">Title of Post</h3>
                <input 
                    type="title"
                    className="form-control"
                    name="title"
                    placeholder="Please enter your Post's title" 
                    value={this.state.title} 
                    onChange={this.fieldChanged('title')} 
                  />
                    <br></br>
                  <h3 class="text-muted">Content of Post</h3>
                  <textarea 
                    type="content"
                    className="form-control"
                    name="content"
                    placeholder="Please enter your Post's content" 
                    value={this.state.content} 
                    onChange={this.fieldChanged('content')} 
                  />
                  <br></br>
                  <button className= "button-edits" 
                    style={{borderRadius: 30, padding: 20, display: 'flex'}}
                    type="submit"> 
                    Save Post 
                  </button>
                </form>
              </div>
          </div>
        </div>
      </div>
    );
  }
  }
  
  export default AddThreadPost;