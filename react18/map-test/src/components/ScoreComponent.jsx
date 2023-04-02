import { ScoreCard } from "./score/ScoreCard"

export const ScoreComponent = ( { cityIndex, score, cityCounter, gameOver } ) => {
  return (
    <div className="container">
      <h1>Score</h1>

      <div className="row">
        <div className="col-12 col-lg-6">
          <ScoreCard title="Cities Placed" value={ cityIndex } />
        </div>

        <div className="col-12 mt-3 col-lg-6 mt-lg-0">
        {/* <div className="progress">
          <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width:`25%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div> */}
          <ScoreCard title="Kilometers Left" value={ score } />
        </div>
      </div>

      { gameOver && (
        <div className="row mt-5">
          <h2>GAME OVER</h2>
            <div className="col">
              <ScoreCard title="Your Score" value={ cityCounter } />
            </div>
        </div>
      )}
    </div>
  )
}
