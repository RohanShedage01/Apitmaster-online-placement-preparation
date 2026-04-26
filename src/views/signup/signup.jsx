import { useState } from "react";
import "./login.css";// reuse same CSS

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });