# Sri Vishva Jewellers

React + Vite website with Home and Privacy Policy pages.

## Run
    npm install
    npm run dev        # http://localhost:5173

## Build for hosting
    npm run build      # output in /dist

Upload the contents of `dist/` to your hosting.
The privacy page is at `/privacy-policy`. Your host must send all paths to `index.html`
(on Netlify add `/*  /index.html  200` in `public/_redirects`; on cPanel/Apache add an .htaccess rewrite).

Edit shop details in `src/data.js`.
