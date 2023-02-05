This is an example of using http-proxy-middleware to create a development server to make requests to the EasyPost API. The reason you may use this when developing against the EasyPost API, is due to the fact that EasyPost rejects alls requests coming directly from a browser. So if you want 1 simple development server to test out any EasyPost functionality and you are developing browser based applications, this could be a good option for you.

### Install Dependencies

```
npm install --save http-proxy-middleware cors express dotenv nodemon
```

`nodemon` is technically optional, but can be helpful when making/testing changes to the server.

`cors` will enable cross-origin support

`http-proxy-middleware` will help proxy HTTP requests between our front end application and the EasyPost API.

### Starting the Server

```
npm nodemon server
```

### Create .env File

```
git touch .env
```

File should look something like this:

```
EP_TEST_KEY=E4321FDSA
EP_PRODUCTION_KEY=E1234ASDF
```

Replace the example keys above with your EasyPost API keys which you can get from the [EasyPost Dashboard](https://www.easypost.com/account/api-keys) (development accounts are free)
