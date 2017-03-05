# docBert: Slack File Management Bot

## 1. Dev environment setup ##

Easiest work on docBert is to setup your own Slack team account and register a bot:
Example : if your personal team account name is 'my-team', go to : https://**my_team**.slack.com/services/new/bot

Make sure you have the latest Node and npm installed on your system. You can find Node [here](https://nodejs.org/en/).

1. Enter a username for your bot (e.g. docBert_clone)
2. Click on 'Add bot integration'
3. You will get an API token (this token must be kept secret, and not uploaded to Github)
4. Take note of the API key, we're using it next.

```
$ git clone https://github.com/TheBot-Lab/Chingu-BotLab-docBert.git my_folder
$ npm install
$ eslint --init // feel free to skip this step if you want, then move on to section 2.
```
If you skipped `eslint init`, go straight to Step 2. Otherwise, answer the eslint questions like so: 

```
How would you like to configure eslint?
> Use a popular styleguide 
Which style guide do you want to follow?
> AirBnB
Do you use React?
> N
What format do you want your config file to be in?
> Javascript
```

Let eslint install the necessary libraries for you. Read the eslint [docs](http://eslint.org/), if you have time.
Eslint helps you correctly format your code. For it to work, you must install an eslint plugin for your code editor.
Find the eslint plugin for Visual Studio Code [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Step 2

The docBert project is configured for ES5/6, which is a prerequisite for most JS jobs these days. This project could be a soft introduction in that direction.

Examples : `var` replaced with `const` or `let`, nameless functions written like this `( params ) => { return console.log('Hello') };`

You can also write the code in any version of Javascript you're comfortable with, with the exception of ES7.

All files should be created within the `src` folder so the Babel plugin can process any ES6 code you write.

**Important** :

Create a new file named `constants.js` in the `src` folder: `src/constants.js`. Add the file to .gitignore before doing anything else.

```
// .gitignore

src/constants/js

```
Store the API token you received from Slack into a variable in `src/constants.js`, and export it.

```
// src/constants.js

export const API_TOKEN = 'AAAA-BBBB125426267-123456789password';
```
You'll notice the token is imported in `src/app.js` on Line 4 and kept secret from a Github public repo.

Now, at your console, type:

```
$ npm run dev
```

You should see your bot connecting to Slack. If you type `hello @your_bot_name` in a channel your bot is in, it will reply 'Hello, humans!'

Keep the console open while writing code. It will automatically reload every time you make changes to files in `src/` Enjoy!