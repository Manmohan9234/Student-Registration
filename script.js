body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(to right, #43cea2, #185a9d);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background-color: white;
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 25px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #185a9d;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #185a9d;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #143f6b;
}

#message {
  margin-top: 15px;
  color: green;
  font-weight: bold;
}
