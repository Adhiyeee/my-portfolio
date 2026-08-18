export default function Contact() {
  return (
    <section id="contact">
     
      <h2 className="contact-title">📬 Get In Touch</h2>

      <div className="contact-card glass" data-aos="fade-up">

        <p>
          Interested in data, AI, or building something useful with technology?
          Feel free to reach out — I'm always open to new opportunities and conversations.
        </p>

        <div className="contact-info">
          <a href="mailto:99adithyan@gmail.com?subject=Contacting You&body=Hi Adithyan, I saw your portfolio..." target="_blank">
            📧 99adithyan@gmail.com
          </a>
          <a 
          href="https://github.com/Adhiyeee" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
          <a href="https://www.linkedin.com/in/adithyan-dileepkumar-aab46a324/" target="_blank">
  🔗 LinkedIn
</a>
        </div>

        <button
          className="btn"
          onClick={() => window.location.href = "mailto:99adithyan@gmail.com"}
        >
          Send Message 🚀
        </button>

      </div>
      

    </section>
  );
}