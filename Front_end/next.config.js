/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/compress/file",
        destination: "http://localhost:5000/api/compress/file",
      },
      {
        source: "/api/compress/text",
        destination: "http://localhost:5000/api/compress/text",
      },
      {
        source: "/api/decompress/file",
        destination: "http://localhost:5000/api/decompress/file",
      },
      {
        source: "/api/decompress/text",
        destination: "http://localhost:5000//api/decompress/text",
      },
    ];
  };
  return {
    rewrites,
  };
};