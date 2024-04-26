# Transit Finder App by Jeff LaPrade

To get this project up and running, just follow the simple steps below

### `npm install` (if you haven't already)
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Testing is implemented with Cypress
#### In one terminal run `npm start`
#### In a second terminal run `npm run cypress`
#### From there, open the browser of your choosing to run the tests, which are the following:
- Component tests on the following: `<DisplayTable />` `<HeaderImage />` `<Heading />` `<Text />` `<DisplayTable />`
- End to end tests to select all three dropdown options

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

#### 6. I implemented simple tests with Cypress for components and an end to end test for the entire flow. I hope these tests show I can implement cypress effectively, while I also hope that the evaluator can consider that the bulk of my time was spent on building this app and ensuring functionality.

## I have deployed this app to a simple review app using AWS Amplify
- To see the app running live, check it out here: https://dev.dzkt784heniq2.amplifyapp.com/



