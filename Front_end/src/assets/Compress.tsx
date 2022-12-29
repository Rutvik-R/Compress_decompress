import React from "react";


function Compress() {
  
    return (

      <div className="App">
        <form method="POST" action="http://localhost:5000/file/compress/upload" encType="multipart/form-data">
          <input type="file" name = "file" />
          <input type="submit" name="upload" />
        </form>
        {/* Hello */}
      </div>
    )
  }
  
  export default Compress
    