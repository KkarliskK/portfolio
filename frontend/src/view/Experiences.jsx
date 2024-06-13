import { useEffect, useRef } from 'react';

function Experiences() {
  const experiences = [
    { company: 'Haixing', period: '2020-2021', role: 'Software Engineer', description: 'Developed web applications and collaborated with cross-functional teams to design and implement new features.' },
    { company: 'TechCorp', period: '2018-2020', role: 'Frontend Developer', description: 'Specialized in creating responsive and interactive user interfaces with React and TailwindCSS.' },
    { company: 'InnovateX', period: '2016-2018', role: 'Junior Developer', description: 'Assisted in the development of internal tools and gained valuable experience in full-stack development.' }
  ];

  const reviews = [
    { author: 'Jane Doe', review: 'Outstanding work! Very professional and delivered on time.' },
    { author: 'John Smith', review: 'Amazing developer! The project was completed flawlessly.' },
    { author: 'Alice Johnson', review: 'Great communication and excellent skills. Highly recommended.' }
  ];

  const reviewRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.remove('animate-fadeIn');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    reviewRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      reviewRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-full p-10 mb-20">
      <h1 className="text-4xl font-semibold mb-16 text-center">Work Experience / Reviews</h1>
      
      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl mb-16">
        {experiences.map((exp, index) => (
          <div key={index} className="shadow-xl rounded-lg p-6 m-4 w-80 h-5/6">
            <h2 className="text-2xl font-bold mb-2">{exp.company}</h2>
            <p className=" mb-4">{exp.period}</p>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="">{exp.description}</p>
          </div>
        ))}
      </div>
      
      {/* Reviews */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8">Reviews</h2>
        {reviews.map((review, index) => (
          <div
            key={index}
            ref={(el) => (reviewRefs.current[index] = el)}
            className="shadow-xl rounded-lg p-6 mb-6 opacity-0 transition-opacity duration-1000"
          >
            <p className=" mb-4">&ldquo;{review.review}&rdquo;</p>
            <p className=" text-right">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
