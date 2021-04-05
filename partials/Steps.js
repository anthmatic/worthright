const Bar = ({ filled }) => {
  const color = filled ? "bg-wgold" : "bg-wgreen";
  return (
    <div
      style={{ height: "2px", width: "96px", marginRight: "15px" }}
      className={`inline-block ${color}`}
    ></div>
  );
};

const Bars = ({ currentStep, setCurrentStep }) => {
  var bars = [];
  for (var i = 1; i < 6; i++) {
    bars.push(<Bar key={i} filled={i <= currentStep} />);
  }
  return (
    <div className="flex items-center relative">
      {bars}
      <img
        src={`/icons/${currentStep < 6 ? "black" : "gold"}_check.svg`}
        height="48"
        width="54"
      />
      <div
        className="absolute top-0 left-0 hover:underline cursor-pointer text-xs"
        onClick={() => {
          setCurrentStep(currentStep - 1);
        }}
      >
        &lt; BACK
      </div>
    </div>
  );
};

const Steps = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="pt-10">
      <Bars currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {currentStep != 6 && <h3 className="mt-2">STEP {currentStep}</h3>}
    </div>
  );
};

export default Steps;
