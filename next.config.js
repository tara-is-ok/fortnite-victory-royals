/** @type {import('next').NextConfig} */
const nextConfig = {
  //todo: api routes側で設定する
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://fortnite-victory-royals.vercel.app',
          },
          {
            // 許可するメソッド
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,POST',
          },
          {
            // 許可するリクエストヘッダ
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
