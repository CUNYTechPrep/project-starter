import React from 'react';

class Component extends React.Component
{
        constructor()
        {
            this.googleInput = React.createRef();
        }

        render()
        {
            return
            (
                <div ref={this.googleInput}>
                    {/* Details */}
                </div>
            );
        }
    }

export default AboutUsPage;
