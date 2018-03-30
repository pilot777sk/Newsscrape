# Newsscrape
News scraper app uses cheerio.js to scrape a News site, mongodb to save News articles and user comments.
NPM Packages used: express express-handlebars mongoose body-parser cheerio request.

I uses Cheerio to scrape target data and Mongoose that saves it to my MongoDB database.

Users can store comments on the Articals they read or delete whatever comments they want removed. All stored comments are visible to every user. Mongoose's model system to associate comments with particular articles.

Heroku link to the app: https://peaceful-ridge-86550.herokuapp.com/

