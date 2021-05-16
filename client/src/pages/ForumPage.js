import React from 'react';
import ThreadStarterTable from '../components/Forum/ForumStarterTable';
import '../css/ForumCategoryTable.css';

function ForumPage(props) {


  //do post method here to the FORUM table!

  return (
    <div className="div-heading">
      <form>
        <div className="thread-create">
          <input 
            placeholder="Enter Thread Title"
            maxLength="70"
            minLength="3"
            className="thread-new"
            />
          <input 
            placeholder="Enter Thread Category"
            maxLength="20"
            minLength="3"
            className="thread-new"
          />
          <button className="new-thread-button" type="submit"> 
            Post New Thread
          </button>
        </div>
      </form>

      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
