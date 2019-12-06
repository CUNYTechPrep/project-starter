import React from 'react';
import * as ReactMDL from 'react-mdl';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

function ProfilePage(props) {

  return (
    <div className="contact-body">

      <Grid className="contact-grid">

        <Cell col={2}>
          <h2>Harpreet Gaur</h2>

          <div className="contact-list">
            <List>

              <ListItem>
              <img src="https://pics.me.me/phteven-memecrunch-com-phteven-dog-meme-53283626.png" alt="avatar" style={{ height: '250px' }}/>
              </ListItem>

              <ListItem>
                <ListItemContent>
                  <h3>
                    College: New York City College Of Technology
                  </h3>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                  <h3>
                    Major: Computer systems
                  </h3>
                </ListItemContent>
              </ListItem>

            </List>
         
              </div>

        <br/>

      <Cell/>

          <Cell col={6}>
            <h2>About Me</h2>
          <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
          I love building things.
           While hard engineering problems are often intrinsically fun to tackle,
           I'm most attracted to solving real customer problems with a business justification.
           I'm looking for a senior individual contributor role where I can take on on collaborative
           team leadership responsibilites, and gain experience with
           architecture and project management.
            </p>
          </Cell>

        </Cell>
        <br/>

        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (123) 456-7890
                  </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
                  <a href = "https://www.linkedin.com/in/harpreetgaur">Harpreet Gaur</a>
                  </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  someone@example.com
                  </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                  <i className="fa fa-skype" aria-hidden="true" />
                  MySkypeID
                  </ListItemContent>
              </ListItem>

            </List>

          </div>

        </Cell>
      </Grid>

    </div>
  );
}

export default ProfilePage;


