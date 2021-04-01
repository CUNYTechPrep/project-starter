import React from 'react';

function ThreadRow(props) {
  return (
    <>
      <tr>
        <th>Thread</th>
        <th>Posts</th>
      </tr>
      <tr>
        <td>Advice</td>
        <td>55</td>
      </tr>
      <p>
        Everybody could use a little help sometimes - give and receive tips from
        your fellow Buds!
      </p>
      <tr>
        <td>Community</td>
        <td>20</td>
      </tr>
      <p>
        Theres no community without U in it - share news, events or personal
        achievments!
      </p>
      <tr>
        <td>Fun</td>
        <td>98</td>
      </tr>
      <p>
        Being fit doesn't have to be so serious - post memes, epic fails or cute
        dogs!
      </p>
    </>
  );
}

export default ThreadRow;
