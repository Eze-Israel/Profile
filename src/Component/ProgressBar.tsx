interface ProgressBarProps{
    percentage: number;
}

const ProgressBar = ({percentage}: ProgressBarProps) => {
    return(
        <div className="progress-bar-container">
            <div className="progress">
                <div className="progress-fill" style={{
                    width:`${percentage}%`
                }}>
                    <span className="percentage-text">
                        {/* {percentage}% */}

                    </span>

                </div>
            </div>
            
        </div>
    )
}
export default ProgressBar;