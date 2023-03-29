// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    category: ['Machine Learning', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    category: ['Machine Learning', 'Data Engineering', 'Python'],
  },
  {
    title: 'SAP SuccessFactor',
    category: ['Framework'],
  },
  {
    title: 'Jupyter',
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    category: ['Languages', 'Python'],
  },
  {
    title: 'C/C++',
    category: ['Languages'],
  },
  {
    title: 'Swift',
    category: ['Languages'],
  },
  {
    title: 'C#',
    category: ['Languages'],
  },
  {
    title: 'F#',
    category: ['Languages'],
  },
  {
    title: 'Flutter',
    category: ['Framework'],
  },
  {
    title: 'Java',
    category: ['Languages'],
  },
  {
    title: 'Julia',
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    category: ['Languages'],
  },
  {
    title: 'R',
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    category: ['Machine Learning', 'Javascript'],
  },
  {
    title: 'GraphQL',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Docker',
    category: ['Tools'],
  },
  {
    title: 'Azure',
    category: ['Tools'],
  },
  {
    title: 'GDB',
    category: ['Tools'],
  },
  {
    title: 'Linux',
    category: ['Tools'],
  },
  {
    title: 'Maven',
    category: ['Tools'],
  },
  {
    title: 'Pandas',
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  {
    title: 'Matplotlib',
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    category: ['Data Engineering', 'Machine Learning', 'Python'],
  },
  {
    title: 'RESTful API',
    category: ['Framework', 'Web Development', 'Data Engineering'],
  },
  {
    title: 'PyTorch',
    category: ['Framework', 'Python', 'Machine Learning'],
  },
  {
    title: 'Tensorflow',
    category: ['Framework', 'Python', 'Machine Learning'],
  },
  {
    title: 'Django',
    category: ['Framework', 'Web Development'],
  },
  {
    title: 'GoogleTest',
    category: ['Framework'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
