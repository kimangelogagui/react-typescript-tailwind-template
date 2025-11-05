import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate EmailJS or API call here
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="items-center justify-center px-6">
      <h1 className="text-headingTextColor mb-10 text-center text-3xl font-semibold md:text-5xl">
        Contact Me
      </h1>
      <div className="bg-secondaryBg w-full max-w-2xl rounded-2xl p-8 shadow-md">
        <form
          onSubmit={handleSubmit}
          className="text-bodyTextColor font-poppins space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="focus:ring-primaryBg w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="focus:ring-primaryBg w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="focus:ring-primaryBg w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-tertiaryBg hover:bg-primaryBg w-full rounded-lg py-3 font-medium text-black transition duration-300"
          >
            Send Message
          </button>
          {status && <p className="text-center text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
