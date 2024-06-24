 const getCount = (resource, data) => {
  let i = 0;
  let hashing = {};

  let countData = [];

  // eslint-disable-next-line react/prop-types
  data?.forEach((item) => {
    let requestedResource = item[resource];
    if (requestedResource) {
      if (!hashing[requestedResource] && hashing[requestedResource] !== 0) {
        hashing = { ...hashing, [requestedResource]: i };
        countData.push({ name: requestedResource, count: 1 });
        i++;
      } else {
        countData[hashing[requestedResource]].count += 1;
      }
    }
  });
  return countData;
};

module.exports = getCount;