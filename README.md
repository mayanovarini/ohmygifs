# React Project

An application to display Giphy data, built with ReactJS.

## Demo

Access the demo here : https://ohmygifs-123.firebaseapp.com/

### Prerequisites to run locally

[Skip the first step if you download it from the zipped project folder]
On your local directory, clone the repo bar repository by running :

```
git clone https://github.com/thegirlfromipanema/ohmygifs
```

then, run :

```
npm install
```

then start the dev/local server :

```
npm start
```

to create the build :

```
npm build
```

### Technical Rationale

- I use ReactJS to modularize every element as a component or
functional component when there is no state stored in the file.

- For simplicity and maintainability of an app this small,
the state and methods are centralized in App.js
(there was no complex state synchronization between multiple components which is the problem that Redux solves)

- I deployed the application to Firebase,
as it provides easy deployment compared to Heroku (only appropriate for tiny projects though).


## Built With

* [ReactJS](https://reactjs.org//) - The JS library used to modularize the DOM, centralize the data and make the UI interactive

* [Firebase](https://firebase.google.com/) - Used for deployment

## Versioning

1.0.0

## Developer

[Maya Novarini](https://github.com/thegirlfromipanema)

Visit my [portfolio](http://mayanovarini.com)
