// import { useState } from "react"
// import React from "react"

// const SearchComponent = ({ onSearch }) => {
//     const [searchCriteria, setSearchCriteria] = useState('');
  
//     const handleInputChange = (event) => {
//       setSearchCriteria(event.target.value);
//     };
  
//     const handleSearchClick = () => {
//       onSearch(searchCriteria);
//     };
  
//     return (
//       <div>
//         {/* <input
//           type="text"
//           value={searchCriteria}
//           onChange={handleInputChange}
//         /> */}
//         <input
//         type="text"
//         value={searchCriteria}
//         onChange={handleInputChange}
//         style={{
//           backgroundColor: 'lightblue',
//           fontWeight: 'bold',
//           borderRadius: '20px',
//           color: 'black',
//           padding: '5px',
//         }}
//       />
//         {/* <button onClick={handleSearchClick}>Search</button> */}
//         <button
//         onClick={handleSearchClick}
//         style={{
//           backgroundColor: 'darkblue',
//           fontWeight: 'bold',
//           borderRadius: '20px',
//           color: 'yellow',
//           padding: '5px 10px',
//           marginLeft: '5px',
//         }}
//       >
//         Search
//       </button>
//       </div>
//     );
//   };
  
//   export default SearchComponent


import { useState } from "react";
import React from "react";

const SearchComponent = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchCriteria(value);
    onSearch(value); // Call onSearch whenever search criteria changes
  };

  return (
    <div>
      <input
        type="text"
        value={searchCriteria}
        onChange={handleInputChange}
        style={{
          backgroundColor: 'lightblue',
          fontWeight: 'bold',
          borderRadius: '20px',
          color: 'black',
          padding: '5px',
        }}
      />
      <button
        onClick={() => onSearch(searchCriteria)} // Call onSearch when the button is clicked
        style={{
          backgroundColor: 'darkblue',
          fontWeight: 'bold',
          borderRadius: '20px',
          color: 'yellow',
          padding: '5px 10px',
          marginLeft: '5px',
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
