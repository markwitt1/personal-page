const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/yolo/Desktop/personal-page/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/pages/404.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/pages/blog.tsx"))),
  "component---src-pages-cv-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/pages/cv.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/pages/index.tsx"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/pages/projects.tsx"))),
  "component---src-templates-blog-post-index-tsx": hot(preferDefault(require("/home/yolo/Desktop/personal-page/src/templates/BlogPost/index.tsx")))
}

