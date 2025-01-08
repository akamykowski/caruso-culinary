
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/caruso-culinary/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 20555, hash: '635358c2b19630d3fc4ee045ef2897487446ba4ef8cafb2823e2395481e54889', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20928, hash: 'dd9a5d9d4eec4b9312fc2dd210f1f975cd0488bfb7473d38dd856c2ca98bcac5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-M7GOVPLR.css': {size: 328, hash: '87CCeCslOqU', text: () => import('./assets-chunks/styles-M7GOVPLR_css.mjs').then(m => m.default)}
  },
};
