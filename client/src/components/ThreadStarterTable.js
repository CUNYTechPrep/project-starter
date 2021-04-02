import React from 'react';
import ThreadStarterTableRow from './ThreadStarterTableRow';
import './ThreadStarterTable.css';

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
