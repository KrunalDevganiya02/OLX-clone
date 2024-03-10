// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../style/placeBid.css";

// function One() {
//   const [item, setItem] = useState({
//     Name: "",
//     Description: "",
//     Price: null,
//     cover: "",
//     catagory: "",
//   });

//   const navigate = useNavigate();

//   const handlechange = (e) => {
//     setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleclick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8000/items", item);
//       navigate("/show");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="up">
//       <div className="up-con">
//         <h2>List Item</h2>
//         <input
//           type="text"
//           placeholder="ItemName"
//           onChange={handlechange}
//           name="Name"
//         />

//         <input
//           type="text"
//           placeholder="Description"
//           onChange={handlechange}
//           name="Description"
//         />
//         <input
//           type="number"
//           placeholder="price"
//           onChange={handlechange}
//           name="Price"
//         />
//         <input
//           type="file"
//           placeholder="cover"
//           onChange={handlechange}
//           name="cover"
//         />
//         <input
//           type="text"
//           placeholder="Catagory"
//           onChange={handlechange}
//           name="catagory"
//         />
//         <button onClick={handleclick}> Add New Item</button>
//       </div>
//     </div>
//   );
// }

// // Export the component
// export default One;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/placeBid.css";

function One() {
  const [item, setItem] = useState({
    Name: "",
    Description: "",
    Price: null,
    cover: null, // Change cover to null initially
    catagory: "",
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    if (e.target.name === "cover") {
      // For file input, set the value to the file itself
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleclick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", item.Name);
    formData.append("Description", item.Description);
    formData.append("Price", item.Price);
    formData.append("cover", item.cover); // Append the file to the form data
    formData.append("catagory", item.catagory);

    try {
      await axios.post("http://localhost:8000/items", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/show");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="up">
      <div className="up-con">
        <h2>List Item</h2>
        <input
          type="text"
          placeholder="ItemName"
          onChange={handlechange}
          name="Name"
        />

        <input
          type="text"
          placeholder="Description"
          onChange={handlechange}
          name="Description"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handlechange}
          name="Price"
        />
        <input type="file" onChange={handlechange} name="cover" />
        <input
          type="text"
          placeholder="Catagory"
          onChange={handlechange}
          name="catagory"
        />
        <button onClick={handleclick}> Add New Item</button>
      </div>
    </div>
  );
}

// Export the component
export default One;
