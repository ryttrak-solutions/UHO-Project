import React from 'react';

import logo from '../../assets/who-logo.png';

export default function leftPanel() {
  return (
    <div className="leftPanel">
			<div className="logoImg">
				<figure className="image">
					<img alt="logo" src={logo} />
				</figure>
			</div>
      
			<div className="leftText">
				<p>
					Bringing remember for supplied her why was confined. Midd leton nsive belie ving add.
				</p>
				<br />
				<p>
					Wea ther adapt ed prepare oh is calling. These wrong of he which there smile to my front.
				</p>
			</div>

			<div className="tickMark">
				{/* <i class="fas fa-check"></i> */}
			</div>

			<div className="timerDiv">
				01:09
			</div>
    </div>
  )
}
