const AboutCard = ({activeTab}) => {
  return (
    <article>
      <div
        className={`tabTransition ${
          activeTab === "about" ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        {activeTab === "about" && (
          <div>
            <h2>About</h2>
            <p className="py-8 text-lg text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque
              dignissimos error quam quos dolore quidem minus aliquam sunt
              mollitia reprehenderit ab quasi nulla earum harum et eius, id
              iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit, saepe consequuntur maxime laudantium similique ipsa
              explicabo, blanditiis maiores provident dicta laboriosam sequi a.
              Explicabo quo provident, esse consectetur reiciendis assumenda.
            </p>
          </div>
        )}
      </div>

      <div
        className={`tabTransition ${
          activeTab === "education" ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        {activeTab === "education" && (
          <div>
            <h2>Education</h2>
            <p className="py-8 text-lg text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque
              dignissimos error quam quos dolore quidem minus aliquam sunt
              mollitia reprehenderit ab quasi nulla earum harum et eius, id
              iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit, saepe consequuntur maxime laudantium similique ipsa
              explicabo, blanditiis maiores provident dicta laboriosam sequi a.
              Explicabo quo provident, esse consectetur reiciendis assumenda.
            </p>
          </div>
        )}
      </div>

      <div
        className={`tabTransition ${
          activeTab === "experience" ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        {activeTab === "experience" && (
          <div>
            <h2>Experience</h2>
            <p className="py-8 text-lg text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex neque
              dignissimos error quam quos dolore quidem minus aliquam sunt
              mollitia reprehenderit ab quasi nulla earum harum et eius, id
              iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit, saepe consequuntur maxime laudantium similique ipsa
              explicabo, blanditiis maiores provident dicta laboriosam sequi a.
              Explicabo quo provident, esse consectetur reiciendis assumenda.
            </p>
          </div>
        )}
      </div>
    </article>
  );
};
export default AboutCard;
