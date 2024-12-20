import Link from '@docusaurus/Link';
import React from 'react';
import RESOURCES from './resources';

export default function ResourcesSection() {
  return (
    <section className="my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <span className="dyte-badge">开发者文档</span>
        <h2 className="lg:text-3xl">现有的文档太多太复杂，不知道怎么看?</h2>
        <p className="text-text-400">
          我们做了个索引，并重写了其中一部分，并欢迎与我们一起改进优化。 <br />
        </p>

        <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <Link
              className="group flex flex-col justify-between"
              key={resource.title}
              href={resource.url}
            >
              <div>
                <div className="mb-3 overflow-hidden rounded-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="aspect-video lg:aspect-square h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
                  {resource.title}
                </h3>
                <p className="leading-snug text-text-400">
                  {resource.description}
                </p>
              </div>
             
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
