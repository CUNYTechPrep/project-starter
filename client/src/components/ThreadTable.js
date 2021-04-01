import React from 'react';
import ThreadRow from './ThreadTableRow';
import './ThreadTable.css';

function ThreadTable(props) {
  return (
    <section>
      <table className="thread-table">
        <ThreadRow />
      </table>
    </section>
  );
}

export default ThreadTable;
