import React, { useState } from "react";
import axios from "axios";

function Books() {
  const [book, setBook] = useState("");
  const [details, setDetails] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyDHACqvIpKQDvi07o91jhE7u_YUB4eCywg");

  function handleChange(event) {
    var book = event.target.value;
    setBook(book);
  };
  function handleSubmit(event) {
    event.preventDefault();
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
        .then(data => {
          console.log(data.data.items);
          setDetails(data.data.items);
        });
  };

    return (
        <div className="container mt-3">
            <div className="shadow-lg p-3 mb-5 rounded d-flex justify-content-center bg-img">
                <h3>Book App</h3>
            </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label className="h3">Book Name:</label>
                        <input onChange={handleChange} type="text" id="book" className="form-control" placeholder="Search Book Example: Harry Potter" name="email" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>    
                </form>
                    {details.map((book, key) => (
                    <a style={{margin:"10px"}} key={key} rel="noreferrer noopener" target="_blank" href={book.volumeInfo.previewLink}>
                            <img style={{boxShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}} data-bs-toggle="tooltip" title="Click for Info." src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>

                    </a>
                ))}
        </div>
    );
};

export default Books;
