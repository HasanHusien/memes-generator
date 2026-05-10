import { useEffect, useState } from "react";

function challenge() {
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get next characte
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default challenge;
