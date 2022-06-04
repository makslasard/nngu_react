import React from 'react';

const TestPageComponent = () => {
  const [count, setCount] = React.useState(0);
  const [someArray, setSomeArray] = React.useState([1, 2, 3]);

  React.useEffect(() => {
    console.log('ComponentDidMount');
  }, [count]);

  React.useEffect(() => {
    return () => {
      console.log('ComponentWillUnmount');
    };
  }, []);

  const countHandler = () => {
    return setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={countHandler}>
        Изменить состояние
      </button>
      <hr />
      <button type="button" onClick={() => setSomeArray((prev) => [...prev, prev.length + 1])}>
        Добавить число в массив
      </button>
      {someArray.map((num, index) => {
        return <div key={`${num + index}`}>{num}</div>;
      })}
    </div>
  );
};

export default TestPageComponent;
