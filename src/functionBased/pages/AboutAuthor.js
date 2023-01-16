import React from 'react';

const AboutAuthor = () => {
  const aboutAuthor = {
    slug: 'about-author',
    title: 'About the Author',
    description:
      'This app was developed by Ibas Majid, a self taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.',
  };

  return (
    <div className="main__content">
      <h1>{aboutAuthor.title}</h1>
      <p>{aboutAuthor.description}</p>
    </div>
  );
};
export default AboutAuthor;
