import React, { useRef } from 'react';
import 'w3-css/w3.css';
import '../styles.css';
import Profile from '../components/Profile/Profile';
import Loading from '../components/Loading';
import '../css/SwipePage.css';
import auth from '../services/auth.js';
import { useSwipeable } from 'react-swipeable';
import Cards, { Card } from 'react-swipe-card';



const Swipe = () => {
//   return (
// 	  <Cards onEnd={action('end')} className='master-root'>
//         {data.map(item => 
//           <Card 
//             onSwipeLeft={action('swipe left')} 
//             onSwipeRight={action('swipe right')}>
//             <h2>{item}</h2>
//           </Card>
//         )}
//       </Cards>
//   )
 }
    // const swipingSlides = (direction) => {
    //   console.log(direction);
    // }
  
    //   //set up a swipe handler - attach to any component you want it to swipe on and itll do it.
    // const handlers = useSwipeable({
    //   onSwipedLeft: () => swipingSlides("next"),
    //   onSwipedRight: () => swipingSlides("prev"),
    //   preventDefaultTouchmoveEvent: true,
    //   trackMouse: true
    // });
  
    // return (
    // //   <div {...handlers}>
    // //     Hello
    // //   </div>
    // );

export default Swipe;