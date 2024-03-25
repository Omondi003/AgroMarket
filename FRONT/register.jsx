import { useState } from 'react';

const FarmerGoodsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    quantity: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {

      const imageFile = files[0];
      
      if (imageFile && imageFile.type.startsWith('image')) {
        setFormData({
          ...formData,
          image: imageFile
        });
      } else {
        e.target.value = null;
        alert('Please select an image file.');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data
     
      // Reset form after submission
      setFormData({
        title: '',
        price: '',
        quantity: '',
        category: '',
        image: null
      });
   };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" onChange={handleChange} accept="image/*" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default FarmerGoodsForm;
