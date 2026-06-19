import React, { useState } from 'react';

function App() {
  const [first, setfirst] = useState("");
  const [array, setArray] = useState([]);
  const [check, setCheck] = useState(0);

  function handelist(e) {
    e.preventDefault();

    if (first.trim() === "") return;

    setArray(prev => [...prev, first]);
    setfirst("");
  }

  function handledelete(indexlist) {
    setArray(prev => prev.filter((_, index) => index !== indexlist));
    setCheck(prev => prev - 1);
  }

  function handlecheck(e) {
    if (e.target.checked) {
      setCheck(prev => prev + 1);
    } else {
      setCheck(prev => prev - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Todo List
        </h1>

        <div className="flex justify-between mb-6 bg-gray-100 p-4 rounded-xl">
          <span className="font-semibold text-green-600">
            Completed: {check}
          </span>

          <span className="font-semibold text-orange-500">
            Pending: {array.length - check}
          </span>
        </div>

        <form className="flex gap-3 mb-6">
          <input
            value={first}
            onChange={(e) => setfirst(e.target.value)}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handelist}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {array.map((element, index) => (
            <li
              key={index}
              className="bg-white flex justify-between items-center border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-gray-700 font-medium">
                {element}
              </span>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  onChange={handlecheck}
                  className="w-5 h-5 accent-green-500 cursor-pointer"
                />

                <button
                  onClick={() => handledelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;