import { useState } from 'react'

const Child1 = () => {
  return <Child2 /> 
}

const Child2 = () => {
  return <Child3 />
}

const Child3 = () => {
  return <Child4 />;
};

const Child4 = () => {
  return <Child5 />;
};


const Child5 = () => {
  return <Child6 />;
};

const Child6 = () => {
  const increaseCount = () => {
    // Code here
  }
  return <button onClick={increaseCount}> Update counter </button>;
}


const Test03 = () => {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h2>Test03: Skip first render</h2>
      Count: { count}
      <br />
      <Child1 />
    </div>
  );
}


export default Test03
