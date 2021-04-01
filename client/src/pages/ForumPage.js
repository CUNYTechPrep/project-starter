import React from 'react';
import ThreadStarterTable from '../components/ThreadStarterTable';
import ThreadTable from '../components/ThreadTable';

//HIERARCHY//

// -ForumPage

/// -ThreadTable
//// -ThreadRow
/// -ThreadStarterTableRow
//// -ThreadStarterTableRow

function ForumPage(props) {
  return (
    <div>
      <button>New Thread</button>
      <ThreadTable />
      <ThreadStarterTable />
    </div>
  );
}

export default ForumPage;
