import React from 'react';
import ThreadStarterTable from '../components/Forum/ForumStarterTable';
import '../css/ForumCategoryTable.css';

function ForumPage(props) {


  //do post method here to the FORUM table!

  return (
    <div style={{ marginBottom: 40 }}>
      <button className="new-thread-button">New Thread</button>
      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
