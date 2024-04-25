# Transit Finder App by Jeff LaPrade

To get this project up and running, just follow the simple steps below

### `npm install (if you haven't already)`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## My assumptions during development:

#### 1. Follow styling layout for the Metro Transit Webpage
- I created a custom logo in Figma and used a free stock image to ensure no copyright issues
-  I excluded the header items, chat bot, and footer from the original website due to not being in the scope of functionality built out

#### 2. Followed font, color, styling of the website

#### 3. I implemented tailwindcss for styling for two reasons: to avoid importing a bulky styling package, and to show my ability to create these components custom

#### 4. Since the instructions listed to ‘Select a bus route from a list of available routes’ and does not include selecting by ‘Stop #’, I have not included the stop number functionality in this project.

#### 5. Since the data being fetched is fairly simple, I implemented a simple fetch calls to receive them instead of creating a more complex api section in the app. I felt this way, I could focus more on the styling and functionality since these are just GET calls.






