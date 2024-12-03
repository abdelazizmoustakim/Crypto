import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
interface Links {
  id: number;
  name: string;
  link: string;
}
const links: Links[] = [
  { id: 1, name: "View Market", link: '/ViewMarket' },
  { id: 2, name: "Learn More", link: '/LearnMore' },
];
const Home = () => {
  return (
    <section>
      <div className="dark:bg-white">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-800">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
            Just a crypto page for the crypto community
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
            Browse on different crypto and projects, see crypto news, and just have fun!
          </p>
          <div className="flex flex-wrap justify-center">
            {links.map((link) => (
              <RouterLink
                key={link.id}
                to={link.link}
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
              >
                {link.name}
              </RouterLink>
            ))}
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};
export default Home;