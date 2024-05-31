
const Dashboard = ({ dashboardOpen, setDashboardOpen }) => {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Lindsay Walton',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Tim Cook',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },{
      id: 4,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    }
    // More posts...
  ]
  return (

    <>
      {dashboardOpen ? <div className="py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:mx-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className=" mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="px-8 pt-80 pb-5 relative flex rounded-2xl flex-col items-start justify-between cursor-pointer isolate overflow-hidden">
                <img className="h-full inset-0 w-full -z-10 absolute object-cover " src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
                <div className="absolute -z-10 inset-0 bg-gradient-to-t from-[#111827]"></div>
                
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-300 text-sm leading-6 mr-8">
                    {post.date}
                  </time>
                  <div className="relative flex items-center gap-x-2">
                    <img src={post.author.imageUrl} alt="" className="h-7 w-7 rounded-full bg-gray-50" />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-300">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                    </div>
                  </div>

                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div> : ""}

    </>
  );
}

export default Dashboard;