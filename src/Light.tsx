import { useState } from "react";

function Bulb() {
  const [lightState, setLightState] = useState(true);
  function handleClick() {
    setLightState((lightState) => !lightState);
  }
  return (
    <div>
      {lightState ? (
        <p> Light is On &#x1F4A1;</p>
      ) : (
        <p> Light is Off &#x26AB;</p>
      )}
      <button className="turnBtn" onClick={handleClick}></button>
    </div>
  );
}

export default function Light() {
  return <Bulb />;
}
