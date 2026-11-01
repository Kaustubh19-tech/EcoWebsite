export const createPageUrl = (pageName) => {
  const pageMap = {
    'Home': '/',
    'MyQuest': '/my-quest',
    'MyResearch': '/my-research',
    'Projects': '/projects',
    'Treasure': '/treasure',
    'VoluntaryWork': '/voluntary-work',
    'Blog': '/blog',
  };
  return pageMap[pageName] || '/';
};

