import React from 'react';

function ThreadStarterTableRow(props) {
  return (
    <>
      <tr>
        <th> Title/Thread Starter</th>
        <th> Last Post By</th>
        <th> Replies</th>
        <th> Views</th>
      </tr>
      <tr>
        <td>Best ways to cut while bulking?</td>
        <td>
          MsFriedChicken22
          <p>2-21-2021, 6:50pm</p>
        </td>
        <td>7</td>
        <td>23</td>
      </tr>
    </>
  );
}

export default ThreadStarterTableRow;
