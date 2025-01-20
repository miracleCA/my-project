import { Helmet } from 'react-helmet';
import Homehead from '../Components/Homehead';
import Homebody from '../Components/Homebody';

import myImg from "../Images/Assignment.png"

import '../Styles/Home.css';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - Mine</title>
      </Helmet>

      <Homehead/>
      <Homebody/>

      <img alt='' src={myImg}/>
    </div>
  )
}

export default Home;