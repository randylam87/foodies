Foodies
===============

### Summary
Conceptual web app based on the idea of turning a person's home kitchen into a business. Users are able to own their own home store and sell food to other users. Sellers are able to update their store prices, stock, and menu in real time. Users are able to purchse items and get real time feedback from sellers.

### Feature List
- Users can be both buyers and sellers.
- Buyers are able to search stores in an area and once they select a store, they can place an order with real time updates on order status as well as inventory changes. 
- Buyers are able to bookmark stores as well as write reviews.
- Order history, bookmarks and reviews are all accessable on a customer admin page.
- Sellers are able to add and remove stock as they see fit and are able to accept and decline orders in real time.

### Technologies
- MongoDB
- Express
- React
- Node
- JavaScript
- Axios
- HTML
- CSS
- Bootstrap 3
- Socket.io
- Passport using Local Strategies
- JSON Web Token

### API
- Google Maps API

### Future Improvements
- Cleaner log in / sign up UX
- Add additional valdation on inputs
- Utilize flash messages on errors
- Additional styling on all of the pages including better mobile responsiveness
- Add in filestack to allow users to add photos
- Add Stripe for payment processing
- Upgrade to Redux
- Various bug fixes

### Known bugs
- Search button on home page is not a form submit and must be clicked
- Refresh is required after log in otherwise the user will be redirected back to log in once they attempt to access a secure route
- No frontend error handling on sign up or log in
- Issue with bookmarks where only 1 user can bookmark a store at a time
- Http vs https error on home page due to the search icon (should be moved to static files)
- Users are able to access stores despite the store not being on as well as users being able to make orders outside of store hours