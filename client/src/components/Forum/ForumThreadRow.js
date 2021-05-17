import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//here I want the thread to be clickable to the Post it is connected to
//{ id, category, threadTitle, createdAt, updatedAt, authorId }
function ForumThreadRow({threads}) {
    return (
        <div>
            {threads.map((t) =>
            <tr >
                <td className="thread-starter-table td">
                    <text className="thread-starter-title">
                        Category: {t.props.category}
                        <Link to="/thread">
                            <b> {t.props.threadTitle}</b>          
                        </Link>
                    </text>
                    <p className="thread-starter-info">
                        by <text className="starter-user">
                            {t.props.authorId}
                            </text>
                        , {t.props.createdAt}
                    </p>
                </td>
            </tr>
            )}
        </div>
    )
}

export default ForumThreadRow;