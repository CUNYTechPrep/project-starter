import React from 'react';
import ThreadPost from './ThreadPost';
import '../../css/Thread.css';
import 'w3-css/w3.css'; 
import auth from '../../services/auth';
import { Link, useParams } from 'react-router-dom';


class Thread extends React.Component {
      state = {
        failed: false,
        title: "",
        content: "",
        success: false,
        error: false,
        posts: [], //array of ThreadPosts
      }

    //Call fieldChanged function to get user input
    
      fieldChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
      }
    


    /* 
      Here I want to do an API call to POST to the threadPosts table
    */
    
      postPostinThread = (event) => {
        event.preventDefault();

      fetch("/api/forum/posts/", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: this.state.content,
          title: this.state.title,
          authorId: auth.currentUser.id,
          forumId: this.props.match.params.id,
          threadId: this.props.match.params.id
        }),
      })      
        .then(res => res.json())
        .then(user => {
        })
        .then(post => {
            this.setState({
              success: true,
            });
            alert('Posted successfully!');    
        })
        .catch(err => {
          this.setState({
            error: true,
          });
        });
    
    }


    /* I want to do an API call here to GET the threadPosts to later 
    MAP it in the return statement BELOW */
    componentDidMount() {
      
      const { id } = this.props.match.params; // this one got it from the react router id
      
      fetch("/api/forum/posts/"+id) //get the id of the forum -> threadId
      .then(res => res.json())
      .then(posts => {
        console.log(posts.threadPosts);
        this.setState({
          posts: posts.threadPosts
            // posts.map((p, ii) => 
            //   <ThreadPost {...p} key={ii} />
            // ),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
    }



  //here I want to pass in the forum's primary key which is its id.
  // with that id I can get it to be the forumId value in ThreadPosts model
     render() {
     
        return (
          <div>
            <h6 className="thread-heading">
              <b>Thread: </b>
              <text className="thread-topic">
                Best ways to cut while bulking? 
              </text>
            </h6>
            <div>
                {
                auth.isAuthenticated
                ? 
                  <div className="post">
                      <h2 className="postTitle font-weight-bold">
                        Add a FitPost!
                      </h2>
                      
                      <div style={{paddingTop: 20}}>
                        <form 
                          onSubmit={this.postPostinThread}
                        >
                        <h4 class="text-muted">Title of Post</h4>
                        <input 
                            type="title"
                            className="form-control"
                            name="title"
                            placeholder="Please enter your Post's title" 
                            value={this.state.title} 
                            onChange={this.fieldChanged('title')} 
                          />
                            <br></br>
                          <h4 class="text-muted">Content of Post</h4>
                          <textarea 
                            type="content"
                            className="form-control"
                            name="content"
                            placeholder="Please enter your Post's content" 
                            value={this.state.content} 
                            onChange={this.fieldChanged('content')} 
                          />
                          <br></br>
                          <button className="post-button btn my-10 font-weight-bold"
                            type="submit"> 
                            Save Post 
                          </button>
                        </form>
                      </div>
                  </div>
                  : 
                  <Link to="/sign-in" className="post-login-button btn my-10 font-weight-bold"> 
                    Login to Post In This Thread
                  </Link>
                }        
            </div>
              <div>
              {/* key is important here because it makes every thread unique in React */}
                  {this.state.posts.map((post, index) => (
                    <ThreadPost post={post} />
                  )
                )}
              </div>
          </div>
        );
    }
}

export default Thread;
