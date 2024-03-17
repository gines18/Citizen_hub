import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

function Article() {
  const params = useParams();
  
  const articles = [
    {
      id: 1,
      title: "Why Every Company Needs a Website: Unlocking the Gateway to Digital Success",
      content: {
        text: "In today's fast-paced digital world, having a website isn't merely a desirable asset for businesses; it's an essential tool that can unlock a myriad of opportunities for growth and success. Whether you're a budding entrepreneur or a well-established corporation, establishing a robust online presence through a website is paramount. Here are five compelling reasons why every company, regardless of size or industry, needs a website to thrive in the digital age.",
      text1: "Firstly, a website serves as your digital storefront, providing potential customers with a window into your products, services, and brand identity 24/7. Unlike traditional brick-and-mortar stores with limited operating hours, a website ensures that your business is accessible to anyone, anywhere, at any time.",
      text2:"This accessibility not only enhances convenience for customers but also expands your reach to a global audience, breaking down geographical barriers and opening up new markets.",
      title2: "Marketing and Promotion: Leveraging Your Online Presence",
      text3: "Marketing is the process of promoting your products, services, and brand identity to attract and engage with potential customers. The online presence of your business is crucial for this.",
      text4:"Secondly, in today's consumer-centric landscape, credibility and trust are crucial factors that influence purchasing decisions. A professionally designed website instills confidence in your brand and demonstrates your commitment to professionalism and customer satisfaction. By showcasing testimonials, case studies, and certifications, your website becomes a powerful tool for building credibility and establishing your brand as a trustworthy authority in your industry.",
    }
    },
    {
      id: 2,
      title: "Benefits of Marketing",
      content: {
        text: "Social media has become a pivotal tool for companies in today's digital landscape, reshaping the way businesses engage with their audience and promote their products. Let's delve into the impact of social media on companies:",
        text1: "Building Online Presence: By leveraging social media platforms to showcase your offerings, you establish a direct connection with your target audience, fostering trust and credibility in your brand.",
      }
    },
    {
      id: 3,
      title: "Why Hiring a Professional Web Designer is Essential for Your Business",
      content: {
        text: "When it comes to creating a successful online presence, hiring a professional web designer can make all the difference. A skilled web designer can help you craft a website that not only looks great but also functions seamlessly, providing your visitors with an exceptional user experience. From responsive design to intuitive navigation, a professional web designer can bring your vision to life and help you stand out in the competitive digital landscape.",
      }
    }
  ];

  const selectedArticle = articles.find(article => article.id === parseInt(params.id));

  return (
    <>
    
      <main id="1" className=" max-w-{size} format format-{color} pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased flex justify-center ml-auto mr-auto">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos {params.id}</a>
                  <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                  <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{selectedArticle.title}</h1>
          </header>
          <p className="lead">{selectedArticle.content.text}</p>
          <p>{selectedArticle.content.text1}</p>
          <p>{selectedArticle.content.text2}</p>
          <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
            <figcaption>Digital art by Anonymous</figcaption>
          </figure>
          <h2>{selectedArticle.content.title2}</h2>
          
         <p>{selectedArticle.content.text3}</p>
         <p>{selectedArticle.content.text4}</p>
          
      
        </article>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Article;
