import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer (React)",
      type: "Full-time | Remote/Hybrid",
      responsibilities: [
        "Develop and maintain our e-commerce platform using React",
        "Implement responsive UI components with Tailwind CSS",
        "Collaborate with designers and backend developers",
        "Optimize application for maximum performance",
        "Write clean, maintainable, and efficient code"
      ],
      requirements: [
        "3+ years of experience with React.js",
        "Proficiency in JavaScript, HTML5, and CSS3",
        "Experience with state management (Redux, Context API)",
        "Familiarity with RESTful APIs",
        "Knowledge of modern front-end build pipelines and tools"
      ]
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      type: "Full-time | Remote/Hybrid",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage SEO, PPC, and social media marketing efforts",
        "Analyze campaign performance and optimize strategies",
        "Create engaging content for various platforms",
        "Collaborate with design and sales teams"
      ],
      requirements: [
        "2+ years of digital marketing experience",
        "Proven track record with SEO and PPC campaigns",
        "Experience with analytics tools (Google Analytics, etc.)",
        "Excellent written and verbal communication skills",
        "Creative thinking and problem-solving skills"
      ]
    }
  ];

  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2"
        >
          Join Our Team
        </motion.h2>

        <section className="space-y-8 text-gray-700">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-black mb-4">Why Work With Us?</h3>
            <p className="mb-4">
              At ShopNexa, we're building the future of e-commerce with innovative technology and 
              creative marketing solutions. We value collaboration, innovation, and continuous learning.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Competitive salaries and benefits</li>
              <li>Flexible work arrangements</li>
              <li>Opportunities for professional growth</li>
              <li>Dynamic and inclusive work environment</li>
              <li>Cutting-edge projects and technologies</li>
            </ul>
          </motion.div>

          <div className="mt-10">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-semibold text-black mb-6"
            >
              Current Openings
            </motion.h3>
            
            {jobOpenings.map((job) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleJob(job.id)}
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-lg font-bold text-black">{job.title}</h4>
                    <p className="text-gray-600">{job.type}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                        <h5 className="font-semibold mb-2">Responsibilities:</h5>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                          {job.responsibilities.map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <h5 className="font-semibold mb-2">Requirements:</h5>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                          {job.requirements.map((item, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (job.responsibilities.length + index) * 0.05 }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 bg-gray-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-black mb-4">Not Seeing Your Dream Job?</h3>
            <p className="mb-4">
              We're always looking for talented individuals to join our team. Even if you don't see 
              an opening that matches your skills, we'd love to hear from you!
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Submit General Application
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-black mb-4">Our Hiring Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["Application Review", "Screening Call", "Technical/ Skills Assessment", "Final Interview"].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 border border-gray-200 rounded-lg text-center"
                >
                  <div className="font-bold text-lg mb-2">{index + 1}</div>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Careers;