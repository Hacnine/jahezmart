"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  lastName:"",
  email: "",
  subject:"",
  message: "",
};
const ContactForm = () => {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { name, lastName, email, subject, message } = data;

    // Send data to API route
    const res = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        subject,
        message,
      }),
    });

    const result = await res.json();
    console.log(result);

    // Navigate to thank you
    router.push(`/thank-you/`);
  };

  const handleChange = (e) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-start w-full gap-4">
        <div className="mb-4  w-1/2">
          <label htmlFor="name" className=" mb-1">
            First Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
            // pattern="([A-Z])[\w+.]{1,}"
            value={data.name}
            onChange={handleChange}
            autoFocus
            required
          />
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="lastName" className="block mb-1">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
            value={data.lastName}
            onChange={handleChange}
            autoFocus
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
          // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md"
          required
          value={data.subject}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">
          Your message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          className=" outline-none focus:border-orangeRed w-full px-3 py-2 border rounded-md h-32"
          value={data.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-orangeRed text-white px-4 py-2 rounded-md hover:bg-orangeRed/80"
        disabled={!canSave}
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
