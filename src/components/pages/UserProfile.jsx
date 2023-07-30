import { useEffect, useState } from "react";

// To get the data to localStorage
const getLocalItems = () => {
  let lists = localStorage.getItem("lists");
  if (lists) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const UserProfile = ({user}) => {
  console.log(user)
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [items, setItems] = useState(getLocalItems());

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Add Items
    if (!inputData.email) {
      return;
    } else {
      setItems([...items, JSON.stringify(inputData)]);
      setInputData({ email: "", password: "" });
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

  // To setItem Add and remove to local Storage
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
              type='text'
              name='email'
              value={inputData.email}
              onChange={onChangeHandler}
              placeholder='email is here'
            />
          </label>
          <br />
          <label htmlFor='password'>
            password:{" "}
            <input
              type='text'
              name='password'
              value={inputData.password}
              onChange={onChangeHandler}
              placeholder='password is here'
            />
          </label>
          <br />
          <button type='submit' className='btn'>
            Add Email
          </button>
        </form>
        <div className='result'>
          {items.map((e, index) => {
            return (
              <p key={index}>
                <span>
                  <strong>{index + 1}: </strong>
                  {e}
                </span>{" "}
                <button className='btn red' onClick={() => deleteItem(index)}>
                  delete
                </button>
              </p>
            );
          })}
          <button className='btn darkred' onClick={removeAllItems}>
            remove All
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
