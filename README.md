# PassportGPT

# EXPO SETUP 

## Install expo-dev-client 
`npx expo install expo-dev-client`

### Configure the Default URI Scheme: 
The development client needs a unique URI scheme to handle deep links. configure this in app.json or app.config.js under the 'expo' key. 

### Build the Development Client: 
Once expo-dev-client is installed, and you've set a URI scheme, we need to build the dev client for our project. This can be done using EAS Build or by running a local build.

## trigger a cloud build: 
`$ npx expo run:android`
`$ npx expo run:ios `


## Install Expo CLI
`$ npm install -g expo-cli `

## init project 
`$ npx expo init [KidsMoneyApp]` 

## 

### Start Dev Server
```
$ cd KidsMoneyApp
$ npm install
$ npx expo start 
```
Read the docs here for more on Expo > https://docs.expo.dev/get-started/create-a-project/



## ERRORS: 
- global install of expo=cli is depracated.
- For Node versions 17 and above, and Expo SDK 46 and onwards, it's recommended to use the local Expo CLI that comes bundled with our project.
`$ npm uninstall -g expo-cli`

Use this - Prefix commands with 'npx'
`$ npx expo start`


