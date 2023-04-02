export const ScoreCard = ({ title, value }) => {
  return (
    <div className="card border-primary">
        <div className="card-header">{ title }</div>
        <div className="card-body fs-1 text-primary"> { value } </div>
    </div>
  )
}
