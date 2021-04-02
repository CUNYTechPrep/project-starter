import React from 'react';
import ThreadCategoryTableRow from './ThreadCategoryTableRow';
import './ThreadCategoryTable.css';

function ThreadCategoryTable(props) {
  return (
    <section>
      <table className="thread-category-table">
        <ThreadCategoryTableRow />
      </table>
    </section>
  );
}

export default ThreadCategoryTable;
