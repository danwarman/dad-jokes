# Dad Jokes

This is a very simple React App, bootstrapped with [Create React App](https://github.com/facebook/create-react-app), utilising the [icanhazdadjoke API](https://icanhazdadjoke.com/api) to produce random Dad Jokes.

**Preview:** [dan-jokes.netlify.app](https://dan-jokes.netlify.app/) *(Last checked: 4/06/20 13:00)*

## Stack
* ReactJS
* Bootstrap

## Installation

### Clone Project

Via your command line tool, navigate to the root of your 'sites' directory. This will be the location you store your projects.

Paste the following command and hit `enter`.

```
git clone git@github.com:danwarman/dad-jokes.git
```

### Go into the project
Via your command line tool, navigate into the root of the calculator project.

```
cd dad-jokes
```

### Install the app
As this is a create-react-app, it uses `yarn`.

`yarn` is a node package manager. You must ensure you have both `Node.js` and `yarn` installed in order to install the app.

#### Check you have `node.js` and `yarn` installed

To check if you have node.js installed, run the following command.

```
node -v
```

To check if you have yarn installed, run the following command.

```
yarn -v
```

For instructions on how to install these if they're missing, go to [https://classic.yarnpkg.com/en/docs/install#mac-stable](https://classic.yarnpkg.com/en/docs/install#mac-stable).

#### Installing the app
Run the following command.

```
yarn
```

## Run the app
### Development

In the project directory, you can run:

```
yarn start
```

This runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note:** If port `3000` is unavilable, it will prompt you to request another port.

The page will reload if you make edits.

You will also see any lint errors in the console.

### Production
In the project directory, you can run:

```
yarn build
```

This builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

The app is ready to be deployed!
