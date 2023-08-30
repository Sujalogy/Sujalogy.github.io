function Homepage() {
  return (
    <>
      <section className="nav-link home">
        <div id="user-detail-name">Sujal Singh Thakur</div>
        <div id="user-detail-intro">Formal introduction goes here.</div>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQG_BshjzGgqXw/profile-displayphoto-shrink_400_400/0/1687341067925?e=1698883200&v=beta&t=RSW7T5QLnKAHAhjJmPEKcA2OscKmOWRhHSj4C-tV8Og"
          alt="Professional Photo"
          className="home-img"
        />
      </section>

      <section className="nav-link about"></section>
      <section className="nav-link skills"></section>
      <section className="nav-link projects"></section>

      <section className="nav-link contact">
        <div id="contact-github">
          GitHub Profile: <a href="your-github-link">GitHub</a>
        </div>
        <div id="contact-linkedin">
          LinkedIn Profile: <a href="your-linkedin-link">LinkedIn</a>
        </div>
        <div id="contact-phone">Phone: Your Phone Number</div>
        <div id="contact-email">Email: Your Email Address</div>
      </section>
    </>
  );
}

export default Homepage;
