// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const pages = [
  {
    route: '/',
    heading: 'About this site',
    component: Index,
  },
  {
    route: '/about',
    heading: 'About Me',
    component: About,
  },
  {
    route: '/projects',
    heading: 'Projects',
    component: Projects,
  },
  {
    route: '/contact',
    heading: 'Contact',
    component: Contact,
  },
  {
    route: '/resume',
    heading: 'Resume',
    component: Resume,
  },
];

// Adds router to Page context and allows us to navigate to the
// correct page. See:
// https://testing-library.com/docs/example-react-router/#reducing-boilerplate
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('Renders 404 Page Component', () => {
  renderWithRouter(<NotFound />);
  const linkElement = screen.getByText(/Page Not Found/i);
  expect(linkElement).toBeInTheDocument();
});

const checkPageComponent = async (page) => {
  test(`Renders ${page.route} Component`, () => {
    window.scrollTo = () => {}; // TODO mock this later
    renderWithRouter(<page.component />, { route: page.route });
    // const linkElement = screen.getByTestId('heading');
    // expect(linkElement).toHaveTextContent(page.heading);
  });
};

pages.forEach((page) => checkPageComponent(page));

// /**
//  * @jest-environment jsdom
//  */

// import '@testing-library/jest-dom';
// import '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { act } from 'react-dom/test-utils';
// import App from '../App';

// describe('renders the app', () => {
//   // mocks the fetch API used on the stats page and the about page.
//   const jsonMock = jest.fn(() => Promise.resolve({}));
//   const textMock = jest.fn(() => Promise.resolve(''));
//   global.fetch = jest.fn(() => Promise.resolve({
//     json: jsonMock,
//     text: textMock,
//   }));
//   // mocks the scrollTo API used when navigating to a new page.
//   window.scrollTo = jest.fn();

//   let container;

//   beforeEach(async () => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
//     await act(async () => {
//       await ReactDOM.createRoot(container).render(<App />);
//     });
//   });

//   afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
//     jest.clearAllMocks();
//   });

//   it('should render the app', async () => {
//     expect(document.body).toBeInTheDocument();
//   });

//   it('should render the title', async () => {
//     expect(document.title).toBe('Halli Lacanlale');
//   });

//   it('can navigate to /about', async () => {
//     expect.assertions(7);
//     const aboutLink = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
//     expect(aboutLink).toBeInTheDocument();
//     await act(async () => {
//       await aboutLink.click();
//     });
//     expect(document.title).toContain('About |');
//     expect(window.location.pathname).toBe('/about');
//     expect(window.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(jsonMock).toHaveBeenCalledTimes(0);
//     expect(textMock).toHaveBeenCalledTimes(1);
//   });

//   it('can navigate to /resume', async () => {
//     expect.assertions(0);
//     const contactLink = document.querySelector('#header > nav > ul > li:nth-child(2) > a');
//     // expect(contactLink).toBeInTheDocument();
//     // await act(async () => {
//     //   await contactLink.click();
//     // });
//     // expect(document.title).toContain('Resume |');
//     // expect(window.location.pathname).toBe('/resume');
//   });

//   it('can navigate to /projects', async () => {
//     expect.assertions(3);
//     const contactLink = document.querySelector('#header > nav > ul > li:nth-child(3) > a');
//     expect(contactLink).toBeInTheDocument();
//     await act(async () => {
//       await contactLink.click();
//     });
//     expect(document.title).toContain('Projects |');
//     expect(window.location.pathname).toBe('/projects');
//   });

//   it('can navigate to /stats', async () => {
//     expect.assertions(5);
//     const contactLink = document.querySelector('#header > nav > ul > li:nth-child(4) > a');
//     expect(contactLink).toBeInTheDocument();
//     await act(async () => {
//       await contactLink.click();
//     });
//     expect(document.title).toContain('Stats |');
//     expect(window.location.pathname).toBe('/stats');
//     expect(global.fetch).toHaveBeenCalledTimes(1);
//     expect(jsonMock).toHaveBeenCalledTimes(1);
//   });

//   it('can navigate to /contact', async () => {
//     expect.assertions(3);
//     const contactLink = document.querySelector('#header > nav > ul > li:nth-child(5) > a');
//     expect(contactLink).toBeInTheDocument();
//     await act(async () => {
//       await contactLink.click();
//     });
//     expect(document.title).toContain('Contact |');
//     expect(window.location.pathname).toBe('/contact');
//   });
// });
