import React from 'react';
import ThreadStarterTableRow from './ForumStarterTableRow';
import '../../css/ForumStarterTable.css';

function ThreadStarterTable(props) {
  return (
    <section>
      <table className="thread-starter-table">
        <ThreadStarterTableRow />
      </table>
    </section>
  );
}

export default ThreadStarterTable;
