
# mPersona - By Symaiotics
mPersona is a Cloud-based and downloadable tool to build and interact with custom personas.
It facilitates much better interaction with Large Language Model services like Open AI's GPT4.

## About
mPersona is built in 2 parts, a Vue.js web interface (this package) and a Node.js server side application.

## Configuration
The application also requires environment variables to operate when run locally.
- VITE_API_URL=http://localhost:3000
- VITE_WEBSOCKET_URL=ws://localhost:3000
- VITE_STORAGE_URL=https://[AzureStorageAccount].blob.core.windows.net
When building the Vue project for deployment, replace these variables with real values for your API/Websocket endpoint(s) and your own Azure Storage Account.
GitHub Actions make this easy to implement.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

# License
MIT License
See attached license file.