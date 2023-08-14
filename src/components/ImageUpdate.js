import React, { useState } from "react";

function ImageUpdate() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Function to handle the image upload
  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    // You can perform additional checks on the image here
    setImage(URL.createObjectURL(uploadedImage));
    setUploading(false);
  };

  // Function to handle click on the "Update" button to trigger the upload input
  const handleUpdateClick = () => {
    const uploadInput = document.getElementById("uploadInput");
    uploadInput.click();
  };

  return (
    <div>
      <section>
        <div
          onClick={handleUpdateClick}
          style={{
            cursor: uploading ? "default" : "pointer",
            display: "inline-block",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              style={{
                border: uploading ? "none" : "1px solid #ccc",
              }}
            />
          ) : (
            <p>No image uploaded</p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="uploadInput"
          style={{ display: "none" }}
        />
      </section>
      <section>
        <button
          onClick={handleUpdateClick}
          disabled={uploading}
          style={{ marginTop: "10px" }}
        >
          {uploading ? "Uploading..." : "Update Image"}
        </button>
      </section>
    </div>
  );
}

export default ImageUpdate;
