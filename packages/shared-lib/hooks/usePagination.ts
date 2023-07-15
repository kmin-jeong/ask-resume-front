const usePagination = () => {
  const Pagerange = (size: number, start: number) => {
    return Array(size)
      .fill(start)
      .map((x, y) => x + y);
  };
  const createPagesGroupList = (totalPageCount: number, limitPageCount: number) => {
    const totalPagesGroupList = Pagerange(totalPageCount, 1);
    const pagesGroupList = [];
    for (let i = 0; i < totalPagesGroupList.length; i += limitPageCount) {
      pagesGroupList.push(totalPagesGroupList.slice(i, i + limitPageCount));
    }
    return pagesGroupList;
  };

  const getCurrentGroupIndex = (currentPage: number, limitPageCount: number) => {
    return Math.ceil(currentPage / limitPageCount) - 1;
  };
};

export { usePagination };
