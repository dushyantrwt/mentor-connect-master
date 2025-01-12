import { ChatBubbleLeftRightIcon, VideoCameraIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Real-time Chat',
    description:
      'Easily communicate with mentors and mentees in real-time through our integrated chat feature. Stay connected and get instant feedback.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Video Conferencing',
    description:
      'Schedule and conduct video meetings with mentors directly on the platform, ensuring a seamless mentoring experience.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Session Scheduling',
    description:
      'Organize and book mentoring sessions effortlessly with our integrated calendar and scheduling tools.',
    icon: CalendarIcon,
  },
  {
    name: 'Mentor-Mentee Matching',
    description:
      'Our advanced algorithm helps match mentees with the most suitable mentors based on skills and preferences.',
    icon: UserGroupIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Mentor Connect</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Connections, One Mentor at a Time
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with experienced mentors, schedule sessions, and engage in productive discussions to enhance your skills and career.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
