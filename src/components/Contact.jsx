import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact US</h1>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="abc" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="abc@gmail.com" />
          </div>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
