import React from 'react';


  
import Candidate from '../components/Candidate';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class CandidatesPage extends React.Component {
  state = {
    loading: false,
    posts: null,
    notFound: false,
  }

  // componentDidMount() {
  //   //const { id } = this.props.match.params;
  //   fetch("/api/users/")
  //     .then(res => res.json())
  //     .then(post => {
  //       this.setState({
  //         post: <Candidate {...post} />,
  //         loading: false,
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         notFound: true,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(posts => {
        //debugger
        this.setState({
          loading: false,
          //unsure about the line below
          posts: posts.map((p,ii) => <Candidate {...p} key={ii} />),
        }, (nextState => {
          console.log(this.state)
        }));
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    console.log(this.state.post);
    return this.state.posts;
    
    // return (
    //   <div>
    //     <h1>Our Candidates</h1>
    //   </div>
    // )
  }
}

export default CandidatesPage;




// function CandidatesPage(props) {
//   return (
//       <div>
//     <div>Our candidates</div>

//     <CardDeck>
//     <Card>
//       <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
//       <CardBody>
//         <CardTitle>Card title</CardTitle>
//         <CardSubtitle>Card subtitle</CardSubtitle>
//         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//         <Button>Button</Button>
//       </CardBody>
//     </Card>
//     <Card>
//       <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
//       <CardBody>
//         <CardTitle>Card title</CardTitle>
//         <CardSubtitle>Card subtitle</CardSubtitle>
//         <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
//         <Button>Button</Button>
//       </CardBody>
//     </Card>
//     <Card>
//       <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
//       <CardBody>
//         <CardTitle>Card title</CardTitle>
//         <CardSubtitle>Card subtitle</CardSubtitle>
//         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
//         <Button>Button</Button>
//       </CardBody>
//     </Card>
//   </CardDeck>
//   </div>
//   );
// }

// export default CandidatesPage;



//****** */

// import React from 'react';
// import Post from '../components/Post';
// import Loading from '../components/Loading';
// import { Redirect } from 'react-router-dom';

// class CandidatesPage extends React.Component {
//   state = {
//     loading: true,
//     post: null,
//     notFound: false,
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     fetch("/api/users/"+id)
//       .then(res => res.json())
//       .then(post => {
//         this.setState({
//           post: <Post {...post} />,
//           loading: false,
//         });
//       })
//       .catch(err => {
//         this.setState({
//           notFound: true,
//         });
//       });
//   }


//   render() {
//     if(this.state.notFound) return <Redirect to="/" />;
//     if(this.state.loading) return <Loading />;
//     return this.state.post;
//   }
// }

// export default CandidatesPage;