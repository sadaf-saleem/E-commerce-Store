const API_URL = import.meta.env.VITE_API_URL;


// Fetch all products
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch all courses
export const fetchCourses = async () => {
  try {
    const res = await fetch(`${API_URL}/courses`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
};

// Register user
export const registerUser = async (form) => {
  try {
    const res = await fetch(`${API_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    return await res.json();
  } catch (error) {
    console.error("Error registering user:", error);
    return { message: "Failed to register user" };
  }
};

// Login user
export const loginUser = async (form) => {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    return await res.json();
  } catch (error) {
    console.error("Error logging in:", error);
    return { message: "Failed to login" };
  }
};

// Place order
export const createOrder = async (orderData) => {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error placing order:", error);
    return { message: "Failed to place order" };
  }
};
