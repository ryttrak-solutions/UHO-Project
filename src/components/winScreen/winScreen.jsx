import React from 'react';

import LeftPanel from '../leftPanel/leftPanel';

export default function winScreen(props) {
  return (
    <div className="columns is-mobile">
      <LeftPanel className="column" screen="win" />
			<div className="column winRightPanel">
				{props.win === "puzzle" ? (
					<div>
						<div className="winMessage">
							{props.message}
						</div>

						<div className="winTickMark">
							{/* <i class="fas fa-check"></i> */}
						</div>
					</div>
				) : (
					<div>
						<div className="winMessage">
							{props.message}
						</div>

						<div className="winScore">
							{props.score}/10
						</div>

						<div className="winTickMark">
							{/* <i class="fas fa-check"></i> */}
						</div>
					</div>
				)}

				<div className="bottomButton">
					CONTINUE
				</div>
			</div>
    </div>
  )
}
