import React from 'react';
import MyFace from '../static/my-face.jpg';

const Header = () => {
	return (
      <div id="me">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 style={{fontSize: '50px', marginRight: '24px'}}>Tran Minh Phat</h1>
          <img src={MyFace} style={{borderRadius: '8px'}} width={80} height={80} alt="Phat's avatar" />
        </div>
      </div>
	)
}

export default Header