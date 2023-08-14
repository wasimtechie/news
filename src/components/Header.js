import React, { useState } from "react";
import buletinLogo from '../assets/buletin.png'

function Header() {

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
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
       <img className="" style={{width:'130px',border:'0px', borderRight:'2px', borderStyle:'solid', borderColor:'gray', paddingRight:'30px'}} src={buletinLogo} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ps-4">
            <li className="nav-item active">
              <a className="nav-link ps-3 pe-3" href="/">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3 pe-3" href="/about">
                Creator
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3 pe-3" href="/services">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-3" href="/contact">
                Subscribe
              </a>
            </li>
          </ul>
          
        </div>
        <div className="navbar-nav">
            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleUpdateClick}
                style={{
                  cursor: uploading ? "default" : "pointer",
                  display: "inline-block",}}
              >
                {image ? (
                <img
                src={image}
                  alt="Profile"
                  className="rounded-circle"
                  width="50px"
                  height="50px"
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
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                    <section>
                        <button
                        className="btn"
                        onClick={handleUpdateClick}
                        disabled={uploading}
                        >
                        {uploading ? "Uploading..." : "Update Image"}
                        </button>
                    </section>    
                </li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Header;
