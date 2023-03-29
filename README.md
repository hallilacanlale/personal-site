# Personal Website

See: [mldangelo.com](https://mldangelo.com).

My personal website. An [MIT](https://github.com/mldangelo/personal-site/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.

## Adapting this Project

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below and review **detailed notes and a checklist on adapting this project [here](./docs/adapting-guide.md)**. Please feel free to reach out to me by filing an issue or emailing me at [help@mldangelo.com](mailto:help@mldangelo.com) for help configuring your project.

## Contributing

Contributions are actively encouraged. Please review the [design goals](./docs/design-goals.md), [roadmap](./docs/roadmap.md), and [contributing guidelines](./docs/contributing.md). If you find a bug, please email me, submit a pull request (I'll buy you a coffee as a thank you), or submit an issue.

## Dependencies

Tested with: [node](https://nodejs.org/) >= v14 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/mldangelo/personal-site.git # replace [mldangelo] with your github username if you fork first.
cd personal-site
nvm install # this is optional - make sure you're running >= node 14 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Acknowledgements

* Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).
* Special thanks to mldangelo for allowing to use his website as MIT opensource!
