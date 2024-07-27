## 1. Initialize Project
- [x] Initialize git repo
- [x] Add server
- [x] Add base vite react project as a client 
    - *npm create vite . => React => JavaScript
    - *npm install
    - *npm run dev
- [x] CleanUp client
- [x] Add project resource
- [x] Separate HTML into components

## 2. Basic Components
- [x] Install react-router-dom 
    - *npm i react-router-dom 
- [x] Setup react-router-dom:
    * In main.jsx add:
     
            import { BrowserRouter } from "react-router-dom";
            <BrowserRouter>
                <App />
            </BrowserRouter> 


- [x] Add router in App.jsx
  
    * inside App.jsx import:
     
            import { Routes, Route } from 'react-router-dom'
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
            </Routes>
- [x] Add links in the navigation`   
## 3. Create Service Layer
- [x] Service layer architecture
- [x] Abstract requester
## 4. Page Implementation
- [x] auth
  - [x] admin
  - [x] profile
- [x] list
  - [x] list item
  - [x] item details
- [x] comments
- [x] home
- [x] contacts
- [x] about





        *npm run lint
        *npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
        *npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
        *npm install axios
        *npm install --save react-toastify
        *npm i @emailjs/browser
        *npm install framer-motion
        *npm install sass
        *npm install react-leaflet leaflet => https://react-leaflet.js.org/docs/start-installation/

