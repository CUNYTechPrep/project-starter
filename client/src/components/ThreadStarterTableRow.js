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
        <td>
          <text className="thread-starter-title">
            Advice: <b>Best ways to cut while bulking?</b>
          </text>
          <p className="thread-starter-info">
            by <text className="starter-user">John Cena</text>, 02-13-2021
            9:20am
          </p>
        </td>
        <td>
          <text className="starter-user thread-starter-info">
            MsFriedChicken22
          </text>
          <p className="thread-starter-info">02-21-2021, 6:50pm</p>
        </td>
        <td>7</td>
        <td>23</td>
      </tr>

      <tr>
        <td>
          <text className="thread-starter-title">
            Fun:{' '}
            <b>What you hear when you go to the gym without your headphones</b>
          </text>
          <p className="thread-starter-info">
            by <text className="starter-user">Lebron James</text>, 02-04-2021
            7:00am
          </p>
        </td>
        <td>
          <text className="starter-user thread-starter-info">big-bro-21</text>
          <p className="thread-starter-info">02-08-2021, 4:32pm</p>
        </td>
        <td>4</td>
        <td>100</td>
      </tr>

      <tr>
        <td>
          <text className="thread-starter-title">
            Advice: <b>Keto diet vs Paleo diet?</b>
          </text>
          <p className="thread-starter-info">
            by <text className="starter-user">Sally-Smith-Smithonson</text>,
            01-02-2021 6:04pm
          </p>
        </td>
        <td>
          <text className="starter-user thread-starter-info">
            x_erica-only-does-legs_x
          </text>
          <p className="thread-starter-info">02-05-2021, 2:30pm</p>
        </td>
        <td>230</td>
        <td>873</td>
      </tr>

      <tr>
        <td>
          <text className="thread-starter-title">
            Community: <b>Who's going to Spartan Race this year?</b>
          </text>
          <p className="thread-starter-info">
            by <text className="starter-user">chicken nudles </text>, 01-26-2021
            10:00am
          </p>
        </td>
        <td>
          <text className="starter-user thread-starter-info">
            susana-GONEzales
          </text>
          <p className="thread-starter-info">02-02-2021, 4:50pm</p>
        </td>
        <td>56</td>
        <td>130</td>
      </tr>
    </>
  );
}

export default ThreadStarterTableRow;
