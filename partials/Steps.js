
const Bar = ({filled}) => {
    const color = filled ? 'bg-wgold' : 'bg-wgreen'
    return (
        <div style={{ height: '2px', width: '96px', marginRight: '15px'}} className={`inline-block ${color}`}></div>
    )
}

const Bars = ({currentStep}) => {
    var bars = [];
    for (var i = 1; i < 7; i++) {
        bars.push(<Bar key={i} filled={i <= currentStep} />);
    }
    return <div>{bars}</div>;
}

const Steps = ({currentStep}) => {
  return (
    <div className="">
       <Bars currentStep={currentStep} />
       <h3>STEP {currentStep}</h3>
    </div>
  );
};

export default Steps;
