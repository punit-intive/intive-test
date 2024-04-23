'use client';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';

const industries = [
  {
    name: 'Automotive',
    description: 'Shaping the future of the In-Car Experience',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Fintech',
    description: 'Disruptive fintech solutions are built around users',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Technology, Media & Communications',
    description: 'High-bandwidth and low-latency connectivity',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'E-Commerce & Products',
    description: 'Powering the customer journey',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Industrial',
    description: 'Stand up to digital disruption',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Telecommunications',
    description: 'Enable your competitive edge',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Energy & Utilities',
    description: 'Delivering exciting innovation',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Life Sciences',
    description: 'Prescription for the future',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Transportation',
    description: 'Bright road ahead',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const industriesCallsToAction = [
  { name: 'Read more', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const services = [
  {
    name: 'Digital Advisory',
    description: 'Explore all your possibilities',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Managed Services',
    description: 'Free up your resources, leverage our expertise',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Design',
    description: 'Create people-centric digital products',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Engineering',
    description: 'Build amazing digital products',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const servicesCallsToAction = [
  { name: 'Read more', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <svg width='77' height='24' viewBox='0 0 77 24'>
              <path
                fill='#007AC9'
                fill-rule='evenodd'
                d='M68.392 6.828c5.073 0 8.454 3.104 8.454 8.384v1.103H64.464c.276 2.116 2.27 3.242 3.976 3.242 1.713 0 2.8-.477 3.954-1.624l3.899 1.631c-2.124 3.084-4.541 4.016-7.722 4.016-4.633 0-8.57-3.465-8.57-8.368 0-4.248 3.375-8.384 8.39-8.384zm-19.509.266l3.348 10.469h.053l3.312-10.47h4.487l-5.592 16.273h-4.477L44.398 7.094h4.485zm-6.288.001v16.27h-4.483V7.095h4.483zm-10.74-4v4h2.82v3.811h-2.812v5.783c0 1.627.349 2.33 2.253 2.33h.557v4.34h-1.35c-4.696 0-5.933-1.935-5.933-5.803v-6.662h-2.812V7.087h2.806V3.096h4.472zM16.344 6.69c3.76 0 6.116 2.231 6.116 6.059v10.601h-4.462v-9.544c0-2.22-1.494-2.937-2.553-2.937-1.511 0-3.008.816-3.008 3.463v9.018H7.927V7.087h4.46v1.626c.742-.964 2.144-2.024 3.956-2.024zM4.49 7.082v12.091c0 2.261-1.595 4.172-4.49 4.172v-2.373c1.188-.166 2.027-.678 2.027-1.753v-1.3H.012V7.082H4.49zm63.95 3.276c-2.094 0-3.662 1.412-3.922 2.688h7.835c-.307-1.37-1.692-2.688-3.913-2.688zM42.6.588v4.34h-4.484V.588H42.6zM4.522.583v4.339H.038V.582h4.484z'
              ></path>
            </svg>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Industries
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {industries.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {industriesCallsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Services
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                        <item.icon
                          className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-gray-600'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                  {servicesCallsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                    >
                      <item.icon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Insights
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            About
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Careers
          </a>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Contact
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <svg width='77' height='24' viewBox='0 0 77 24'>
                <path
                  fill='#007AC9'
                  fill-rule='evenodd'
                  d='M68.392 6.828c5.073 0 8.454 3.104 8.454 8.384v1.103H64.464c.276 2.116 2.27 3.242 3.976 3.242 1.713 0 2.8-.477 3.954-1.624l3.899 1.631c-2.124 3.084-4.541 4.016-7.722 4.016-4.633 0-8.57-3.465-8.57-8.368 0-4.248 3.375-8.384 8.39-8.384zm-19.509.266l3.348 10.469h.053l3.312-10.47h4.487l-5.592 16.273h-4.477L44.398 7.094h4.485zm-6.288.001v16.27h-4.483V7.095h4.483zm-10.74-4v4h2.82v3.811h-2.812v5.783c0 1.627.349 2.33 2.253 2.33h.557v4.34h-1.35c-4.696 0-5.933-1.935-5.933-5.803v-6.662h-2.812V7.087h2.806V3.096h4.472zM16.344 6.69c3.76 0 6.116 2.231 6.116 6.059v10.601h-4.462v-9.544c0-2.22-1.494-2.937-2.553-2.937-1.511 0-3.008.816-3.008 3.463v9.018H7.927V7.087h4.46v1.626c.742-.964 2.144-2.024 3.956-2.024zM4.49 7.082v12.091c0 2.261-1.595 4.172-4.49 4.172v-2.373c1.188-.166 2.027-.678 2.027-1.753v-1.3H.012V7.082H4.49zm63.95 3.276c-2.094 0-3.662 1.412-3.922 2.688h7.835c-.307-1.37-1.692-2.688-3.913-2.688zM42.6.588v4.34h-4.484V.588H42.6zM4.522.583v4.339H.038V.582h4.484z'
                ></path>
              </svg>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Industries
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...industries, ...industriesCallsToAction].map(
                          (item) => (
                            <Disclosure.Button
                              key={item.name}
                              as='a'
                              href={item.href}
                              className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            >
                              {item.name}
                            </Disclosure.Button>
                          )
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...services, ...servicesCallsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Insights
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  About
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Careers
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Contact
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
