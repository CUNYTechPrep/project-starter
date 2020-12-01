import React from 'react'
import faker from 'faker';

export default function MatchPage() {
    return (
      
            <div className="card">
            <div className="content">
                <img className="right floated mini ui image" alt="avatar" src='https://source.unsplash.com/random' />
                <div className="header">Sett Hein</div>
                <div className="meta">
                Baruch College
                </div>
                <div className="meta">
                Computer Information Systems
                </div>
                <div className="ui small label">
                CIS 2200
                </div>
                <div className="ui small label">
                MTH 4120
                </div>
                <div className="ui small label">
                ENG 3140
                </div>
                </div>
                <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add Friend
                </div>
            
        </div>
    )
}