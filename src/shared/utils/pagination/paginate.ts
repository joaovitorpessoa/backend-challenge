/* eslint-disable @typescript-eslint/no-explicit-any */
interface Results {
  data?: object[];
  next?: {
    page: number;
    limit: number;
  };
  previous?: {
    page: number;
    limit: number;
  };
}

function _hasValidParams(page: any, limit: any) {
  const isPageNumber = Number.isInteger(page);
  const isLimitNumber = Number.isInteger(limit);

  if (isPageNumber && page < 1) {
    return false;
  }

  return isPageNumber && isLimitNumber;
}

function paginate(data: object[], _page: any, _limit: any) {
  const page = parseInt(_page, 10);
  const limit = parseInt(_limit, 10);

  if (_hasValidParams(page, limit)) {
    const results: Results = {};

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    if (endIndex < data.length) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }

    results.data = data.slice(startIndex, endIndex);

    return results;
  }

  return data;
}

export default paginate;
