import React from 'react';
import { Redirect } from 'react-router-dom';
import Person from '../components/Person.js'
import gen from '../imgs/genpic.png'
import kev from '../imgs/kdpic.png'
import ayo from '../imgs/ayopic.png'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, CardDeck, CardHeader
} from 'reactstrap';



// let reentryTeam = {
// 	{ "name" : "Kevin Dowdy", "role" : "Full-Stack Engineer", "ghub" : "https://github.com/askAboutKevin", "lin" : "https://www.linkedin.com/in/mykevindowdy/", "bio" : "Kevin is a student at John Jay College studying Computer Science "},
//     { "name" : "Ayodele Farinre", "role" : "Full-Stack Engineer", "ghub" : "https://github.com/ayodele7", "lin" : "https://www.linkedin.com/in/ayodele-farinre/", "bio" : "Ayo is a developer from Brooklyn College who enjoys"},
//     { "name" : "Gen Lipkin", "role" : "Full-Stack Engineer", "ghub" : "https://github.com/genlipkin", "lin" : "https://www.linkedin.com/in/genna-lipkin/", "bio" : "Gen is an aspiring developer from Brooklyn College who enjoys"}
// }

class AboutUsPage extends React.Component {
  
 //  constructor(props) {
 //    super(props);
 //    this.state = {
 //      people : [],
 //    };
 //  }
  
 //  ShowPeople = () => {
 //  	return (
 //      <div>
 //      this.setState({
	// 	people : this.state.people.map((member, ii) => <Person {...member} key={ii} />),
	// })
 //  	  </div>   
 //  	);
 //  }

  render() {
      return (
        <div className="container">
  	  	  <div className="row">
            <div className="col-sm">
    	  	  	<CardDeck>
    	  	  	  <Card className="border-0">
          		    <CardImg top width="90%" src={kev} alt="Reentry Team Member" />
          		    <CardBody>
      		          <CardHeader>Kevin Dowdy</CardHeader>
  		              <br />
  		              <CardSubtitle style={{ color: '#484F56' }}>Full Stack Developer</CardSubtitle>
  		              <CardLink href='https://github.com/askAboutKevin'>GitHub</CardLink>
      		          <CardLink href="https://www.linkedin.com/in/mykevindowdy/">LinkedIn</CardLink>
  		              <CardText>Kevin is a student at John Jay College studying Computer Science. He enjoys reading Harry Potter books, watching movies and football.</CardText>
              		</CardBody>
        		    </Card>
  	  	  	    <Card className="border-0">
              		<CardImg top width="90%" src={ayo} alt="Reentry Team Member" />
              		<CardBody>
  		              <CardHeader>Ayodele Farinre</CardHeader>
  		              <br />		          
      		          <CardSubtitle style={{ color: '#484F56' }}>Full Stack Developer</CardSubtitle>
  		              <CardLink href="https://github.com/ayodele7">GitHub</CardLink>
  		              <CardLink href="https://www.linkedin.com/in/ayodele-farinre/">LinkedIn</CardLink>
  		              <CardText>Ayo is a developer from Brooklyn College studying Computer Science. He enjoys running, cycling and watching and playing soccer.</CardText>
              		</CardBody>
          		  </Card>
  	  	    	  <Card className="border-0">
              		<CardImg top width="90%" src={gen} alt="Reentry Team Member" />
          		    <CardBody>
        		        <CardHeader>Gen Lipkin</CardHeader>
  		              <br />		         
  		              <CardSubtitle style={{ color: '#484F56' }}>Full Stack Developer</CardSubtitle>
        	          <CardLink href="https://github.com/genlipkin">GitHub</CardLink>
  		              <CardLink href="https://www.linkedin.com/in/genna-lipkin/">LinkedIn</CardLink>
  		              <CardText>Gen is an aspiring developer from Brooklyn College who enjoys painting, reading, and building furniture.</CardText>
        		      </CardBody>
        		    </Card>      		  
     	  	  	</CardDeck>
            </div>
            <br /><br /><br /><br /><br />
            <div style={{textAlign : "center"}} >
              <h2>
                <em>"YOU DON'T HAVE TO BE GREAT TO START BUT YOU DO HAVE TO START TO BE GREAT." - Zig Ziglar</em>
              </h2>
            </div>
            <br /><br /><br />            
          </div>
        </div>
    );
  }
}


export default AboutUsPage;