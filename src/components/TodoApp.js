import React,{useState} from 'react'

function TodoApp() {
    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);
  
    function addActivity() {
      // setListData([...listData, activity]);
      // console.log(listData);
      setListData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        setActivity('');
        return updatedList;
      });
    }
    function removeActivity(i) {
      const updatedList = listData.filter((elem, id) => {
        return i !==id;
      });
      setListData(updatedList);
    }
    function removeAll() {
      setListData([]);
    }
  return (
    <>
    <div className="container">
        <h1>TODO LIST</h1>
        <div>
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>Add</button>
          <p><center>Here Is your List :")"</center></p>
          {listData !==[] &&
            listData.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div>
                      {data}
                      <button onClick={() => removeActivity(i)}>Remove</button>
                    </div>
                  </p>
                </>
              );
            })}
        </div>
        {listData.length >= 1 && <button onClick={removeAll}>RemoveAll</button>}
      </div>
    </>
  )
}

export default TodoApp
