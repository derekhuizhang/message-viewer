# Message Viewer
This application implements a basic page to view user messages, including trash, toggle view, starring, and highlight features.

## How to run:
1. install dependencies by running in the root folder:
```
npm install
```
2. start a development serveR:
```
npm start
```

## Design assumptions:
1. The "starred" counter only counts the number of starred messages on the current page (whether the current page is trashed messages or untrashed messages). 
2. As per the instructions, all messages are automatically unhighlighted once they are trashed, and then rehighlighted when they are untrashed.
