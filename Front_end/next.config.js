/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/file/compress/upload",
        destination: "http://localhost:5000/api/compress/file",
      },
      {
        source: "/file/decompress/upload",
        destination: "https://backend-compress-decompress.onrender.com/file/decompress/upload",
      },
      {
        source: "/ducks",
        destination: "http://localhost:5000/",
      },
    ];
  };
  return {
    rewrites,
  };
};