import React from 'react';
import MyFace from '../static/my-face.jpg';

const Header = () => {
	return (
      <div id="me">
        <div>
          <img src={MyFace} style={{borderRadius: '8px'}} width={80} height={80} alt="Phat's avatar" />
        </div>
        <h1 style={{fontSize: '50px', margin: '8px 0'}}>Phat Minh Tran</h1>
      </div>
	)
}

export default Header