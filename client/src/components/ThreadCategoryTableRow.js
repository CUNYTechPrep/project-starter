import React from 'react';

function ThreadRow(props) {
  return (
    <>
      <tr>
        <th>Thread</th>
        <th>Posts</th>
      </tr>
      <tr>
        <td>
          <text className="thread-category">Advice</text>
          <p className="thread-description">
            Everybody could use a little help sometimes - give and receive tips
            from your fellow Buds!
          </p>
        </td>
        <td>55</td>
      </tr>

      <tr>
        <td>
          <text className="thread-category">Community</text>
          <p className="thread-description">
            Theres no community without "you" in it - share news, events or
            personal achievments!
          </p>
        </td>
        <td>20</td>
      </tr>
      <tr>
        <td>
          <text className="thread-category">Fun</text>
          <p className="thread-description">
            Being fit doesn't have to be so serious - post memes, epic fails or
            cute dogs!
          </p>
        </td>
        <td>98</td>
      </tr>
    </>
  );
}

export default ThreadRow;
