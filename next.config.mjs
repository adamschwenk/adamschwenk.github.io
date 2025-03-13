/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export', // Enables static HTML export
images: {
unoptimized: true, // Required for static export
},
// Remove the basePath since we're using a custom domain
trailingSlash: true, // Recommended for static exports
eslint: {
ignoreDuringBuilds: true,
},
typescript: {
ignoreBuildErrors: true,
},
experimental: {
webpackBuildWorker: true,
parallelServerBuildTraces: true,
parallelServerCompiles: true,
},
}

let userConfig = undefined
try {
userConfig = await import('./v0-user-next.config')
} catch (e) {
// ignore error
}

function mergeConfig(nextConfig, userConfig) {
if (!userConfig) {
return
}

for (const key in userConfig) {
if (
  typeof nextConfig[key] === 'object' &&
  !Array.isArray(nextConfig[key])
) {
  nextConfig[key] = {
    ...nextConfig[key],
    ...userConfig[key],
  }
} else {
  nextConfig[key] = userConfig[key]
}
}
}

export default nextConfig
