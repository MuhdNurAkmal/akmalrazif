import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section className="align-element py-24" id="contact">
      <SectionTitle text="Get in Touch" icon="📲" />
      <div className="text-black bg-white mt-7 rounded-md">
        <div className="p-6">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border rounded"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
