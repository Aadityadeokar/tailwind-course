import Image from 'next/image';

export default function Home() {
  const dogs = [
    {
      name: 'ashley',
      transform: 'md:scale-110 -rotate-5',
    },
    {
      name: 'jake',
      transform: 'scale-60 rotate-6 translate-x-2 translate-y-15',
    },
    {
      name: 'sam',
      transform: 'md:scale-110 rotate-6',
    },
    {
      name: 'danny',
      transform: 'md:scale-125 translate-y-11 ',
    },
    {
      name: 'Dame',
      transform: 'scale-75 -rotate-6 translate-x-2 translate-y-15 skew-y-6',
    },
    {
      name: 'Ruth',
      transform: 'scale-75 md::scale-110 -rotate-45',
    },
  ];

  return (
    <main className="py-20 px-10 p-16 m-auto max-w-6xl">
      <h1 className="">Welcome to Dog Islad🐶!</h1>
      <h2 className="my-12">best of the best</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12 my-20 lg:my-32">
        {dogs.map(({ name, transform }, idx) => {
          return (
            <div
              key={name}
              className={`border-2 border-opacity-50 border-blue-400 rounded-xl px-5 pt-1 pb-5 m-auto shadow-xl backdrop-blur-sm bg-white/30 shadow-yellow-300 ${transform} hover:bg-purple-200 hover:scale-105 hover:transition hover:duration-500 dark:grayscale`}
            >
              <div className="my-3">
                <h2 className="truncate w-60">{name}</h2>
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  src={`/images/${idx + 1}.png`}
                  width={260}
                  height={160}
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
