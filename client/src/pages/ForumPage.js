import React from 'react';
import ThreadStarterTable from '../components/Forum/ForumStarterTable';
import ThreadCategoryTable from '../components/Forum/ForumCategoryTable';
import '../css/ForumCategoryTable.css';

function ForumPage(props) {
  return (
    <div style={{ marginBottom: 40 }}>
      <ThreadCategoryTable />
      <button className="new-thread-button">New Thread</button>
      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
