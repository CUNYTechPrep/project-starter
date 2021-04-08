import React from 'react';
import ThreadStarterTable from '../components/Thread/ForumStarterTable';
import ThreadCategoryTable from '../components/Thread/ForumCategoryTable';
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
