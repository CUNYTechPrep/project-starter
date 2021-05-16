import React from 'react';
// import ThreadStarterTableRow from './ForumStarterTableRow';
import '../../css/ForumStarterTable.css';
import ForumThreadRow from './ForumThreadRow.js';


class ThreadStarterTable extends React.Component {

  state = {
    threadsFromForumTable: [],
  }

  componentDidMount() {
    fetch("/api/forum")
    .then(res => res.json())
    .then(res => {
      this.setState({
        threadsFromForumTable: res,
      });
    })
    .then(threads => {
      this.setState({
        threadsFromForumTable: threads.map((p, ii) => 
            <ForumThreadRow {...p} key={ii} />
          ),
      });
    })


    .catch(err => console.log("API ERROR: ", err));
  }

  render(){  
    return (
      <section>
        <table className="thread-starter-table">
          <tr>
            <th> Title/Thread Starter</th> {/* <th> Last Post By</th> */}{/* <th> Replies</th> */}
          </tr>

          {/* ForumThreadRow will be MAPPED like an array to showcase all threads we have in the Forum here */}
          
            {/* {this.state.threadsFromForumTable.map((thread) =>
              <ForumThreadRow>
                {thread}
              </ForumThreadRow>
            )} */}

          <ForumThreadRow />
        </table>
      </section>
    );
  }
}

export default ThreadStarterTable;
