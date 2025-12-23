export const createPageUrl = (pageName) => {
  const pageMap = {
    'Home': '/',
    'MyQuest': '/my-quest',
    'Projects': '/projects',
    'Treasure': '/treasure',
    'VoluntaryWork': '/voluntary-work',
  };
  return pageMap[pageName] || '/';
};

