export const createPageUrl = (pageName) => {
  const pageMap = {
    'Home': '/',
    'MyQuest': '/my-quest',
    'Projects': '/projects',
    'Treasure': '/treasure',
  };
  return pageMap[pageName] || '/';
};

