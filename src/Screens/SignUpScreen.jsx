import { useEffect, useState } from "react";

// to set the data to localStorage
const getLocalItems = () => {
  let lists = localStorage.getItem("lists");
  if (lists) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const SignUpScreen = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const submitHandler = (e) => {
    e.preventDefault();
    // Add Items
    if (!inputData) {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // delete Items
  const deleteItem = (id) => {
    // console.log(id);
    const updateList = items.filter((ele, ind) => ind !== id);
    setItems(updateList);
  };

  // remove all items
  const removeAllItems = () => setItems([]);

  // Add and remove to local Storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <div className='max-width'>
      <div className='signUp'>
        <h1>Get the Food App</h1>
        <p>
          We will send you a link, open it on your phone to download the app.{" "}
          <strong>This Data Store in the Local Storage</strong>
        </p>
        <form onSubmit={submitHandler}>
          <label htmlFor='email'>
            Email:{" "}
            <input
              type='email'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder='email is here'
            />
          </label>
          <button type='submit' className='btn'>
            Add Email
          </button>
        </form>
        <div className='result'>
          {items.map((e, index) => (
            <p key={index}>
              <span>
                <strong>{index + 1}: </strong>
                {e}
              </span>{" "}
              <button className='btn red' onClick={() => deleteItem(index)}>
                delete
              </button>
            </p>
          ))}
          <button className='btn darkred' onClick={removeAllItems}>
            remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
