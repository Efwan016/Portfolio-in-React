import React from 'react';

const Certificates = ({ data }) => {
  if (!Array.isArray(data)) {
  console.error('Certificates: data is not an array:', data);
  return null;
}


  return (
    <section id="certificates">
      <div className="row certificate">
        <div className="twelve columns collapsed">
          <h1>My Certifications</h1>
          <div className="certificates-grid">
            {data.map((cert, index) => (
              <div className="cert-card" key={index}>
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <h4>{cert.title}</h4>
                <p>{cert.issuer} — {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
