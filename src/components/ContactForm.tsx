import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzggepr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Submitted ✅");
      form.reset();
    } else {
      setStatus("Error ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-6">
      <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded border" />
      <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded border" />
      <textarea name="message" placeholder="Let’s connect! Tell me what you’re looking for." required rows={5} className="w-full p-3 rounded border"></textarea>
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {status}
      </button>
    </form>
  );
}
