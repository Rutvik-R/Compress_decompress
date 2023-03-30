/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/compress/file",
        destination: process.env.BACK_END_URL + "/api/compress/file",
      },
      {
        source: "/api/decompress/file",
        destination: process.env.BACK_END_URL + "/api/decompress/file",
      },
      {
        source: "/api/compress/text",
        destination: process.env.BACK_END_URL + "/api/compress/text",
      },
      {
        source: "/api/decompress/text",
        destination: process.env.BACK_END_URL + "/api/decompress/text",
      },
    ];
  };
  return {
    rewrites,
  };
};