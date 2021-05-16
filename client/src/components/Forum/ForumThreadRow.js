import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import auth from '../../services/auth.js';

//here I want the thread to be clickable to the Post it is connected to

function ForumThreadRow({ id, category, threadTitle, createdAt, updatedAt, authorId }) {
    return(
        <tr>
            <td>
            <text className="thread-starter-title">
                {category} category here:
                <Link to="/thread">
                    <b>{threadTitle} title here</b>
                </Link>
            </text>
            <p className="thread-starter-info">
                by <text className="starter-user">John Cena</text>, {createdAt}
            </p>
            </td>
        </tr>
    );
}

export default ForumThreadRow;