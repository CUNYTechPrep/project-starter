import React from 'react';
import ThreadStarterTable from '../components/ThreadStarterTable';
import ThreadCategoryTable from '../components/ThreadCategoryTable';
import '../components/ThreadCategoryTable.css';

//HIERARCHY//

// -ForumPage

/// -ThreadTable
//// -ThreadRow
/// -ThreadStarterTableRow
//// -ThreadStarterTableRow

function ForumPage(props) {
  return (
    <div>
      <ThreadCategoryTable />
      <button className="new-thread-button">New Thread</button>
      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
