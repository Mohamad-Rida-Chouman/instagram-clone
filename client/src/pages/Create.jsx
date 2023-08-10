import { useState } from 'react';
import axios from 'axios';
import '../utilities.css';
import './create.css';

const Create = () => {

    // const [formData, setFormData] = useState({
    //     image_url: "",
    //     number_of_likes: 0,
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //     formData,
    //     [name]: value
    //     });
    // };

    // const toBase64 = file => new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve(reader.result);
    //     reader.onerror = reject;
    // });

    const handlePublishPost = async () => {
        try {
            const fileVal = document.getElementById("upload-button");
            // const image64 = await toBase64(file);
            const image_url = fileVal.value;
            console.log(image_url)
          await axios.post('http://127.0.0.1:8000/api/posts', {image_url:image_url, number_of_likes:0});
          console.log('Post added successfully!');
          window.location.reload();
        } catch (error) {
          console.error('Error publishing post:', error);
        }
    };

    return (
    <div className="main-container-post-create flex flex-col justify-center align-center gap-m">
        <img className="width-40" src="https://www.svgrepo.com/show/379459/image-gallery.svg" alt="upload" />
        <p>Upload Photo Here</p>
        <label className="post_upload_button" htmlFor="upload-button">Choose From Computer</label>
        <input type='file' className="post_upload_input" id='upload-button'/>
        <button className="post_upload_button" onClick={handlePublishPost}>Publish Post!</button>
    </div>
)};

export default Create;