import React from 'react';
import ThreadStarterTable from '../components/Thread/ThreadStarterTable';
import ThreadCategoryTable from '../components/Thread/ThreadCategoryTable';
import '../css/ThreadCategoryTable.css';

//HIERARCHY//

// -ForumPage

/// -ThreadTable
//// -ThreadRow
/// -ThreadStarterTableRow
//// -ThreadStarterTableRow

function ForumPage(props) {
  return (
    <div style={{marginBottom: 40}}>
      <ThreadCategoryTable />
      <button className="new-thread-button">New Thread</button>
      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
