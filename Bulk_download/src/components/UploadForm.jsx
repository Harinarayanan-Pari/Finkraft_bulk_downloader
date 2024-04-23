import React, { useState } from 'react';

const UploadForm = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);

    try {
      const response = await fetch('http://your-backend-api-url', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label>CSV File:</label>
        <input type="file" accept=".csv" onChange={handleFileChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadForm;


// import React, { useState } from 'react';
// import './UploadForm.css';

// const UploadForm = () => {
//   const [email, setEmail] = useState('');
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && selectedFile.type === 'text/csv') {
//       setFile(selectedFile);
//     } else {
//       setFile(null);
//       setMessage('Please select a valid CSV file.');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       setMessage('Please select a valid CSV file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('file', file);

//     try {
//       const response = await fetch('http://your-backend-api-url', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={handleEmailChange} required />
//         <label>CSV File:</label>
//         <input type="file" accept=".csv" onChange={handleFileChange} required />
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default UploadForm;
