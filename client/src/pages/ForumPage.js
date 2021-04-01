import React from 'react';
import ThreadStarterTable from '../components/ThreadStarterTable';
import ThreadTable from '../components/ThreadTable';

//HIERARCHY//
// -ForumPage
/// -ThreadTable
//// -ThreadRow
function ForumPage(props) {
  return (
    <div>
      <button>New Thread</button>
      <section>
        <ThreadTable />
      </section>
      <section>
        <ThreadStarterTable />
      </section>
    </div>
  );
}

export default ForumPage;
