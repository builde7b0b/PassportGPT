# PassportGPT 🌍

<div align="center">

![PassportGPT Logo](assets/8.png)

**An AI-powered travel assistant mobile application**

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

</div>

---

## 📋 Table of Contents

- [App Summary](#-app-summary)
- [Core Functionality](#-core-functionality)
- [Technical Stack](#-technical-stack)
- [App Structure](#-app-structure)
- [Environment Configuration](#-environment-configuration)
- [Testing](#-testing)
- [Notable Features](#-notable-features)
- [Expo Setup](#-expo-setup)
- [Build for iOS](#-build-for-ios)
- [Known Issues & Solutions](#-known-issues--solutions)
- [End-to-End Testing with Detox](#-end-to-end-testing-with-detox)
- [React Native Environment Setup](#-react-native-environment-setup)
- [Development Tips](#-development-tips)
- [Backend - Firebase](#-backend---firebase)
- [Development Tools](#-development-tools)
- [Dependencies Summary](#-dependencies-summary)

---

## 🌟 App Summary

PassportGPT is a travel assistant mobile application built with React Native and Expo. The app allows users to ask travel-related questions and receive AI-powered responses.

---

## ⚡ Core Functionality

### 1. Travel Q&A Interface
Users can input travel questions through a simple text interface and receive detailed responses.

### 2. OpenAI Integration
The app uses the OpenAI API (GPT-4) to generate responses to user queries.

### 3. Firebase Backend
A Firebase Cloud Functions backend is set up for additional functionality, including image processing with OCR (Optical Character Recognition) using Tesseract.js.

---

## 🛠 Technical Stack

### Frontend
- **React Native with Expo** - Mobile app framework
- **React's useState hooks** - State Management
- **Native React Native components** - UI Components with custom styling
- **Axios** - API Integration for API calls

### Backend
- **Firebase Cloud Functions** - Serverless backend
- **OpenAI API** - AI Services
- **Tesseract.js** - OCR Processing

---

## 📱 App Structure

Simple single-screen interface with:
- 🏠 Logo
- 📝 Text input for questions
- 🔍 Search button
- 💬 Response display area
- ⏳ Loading animation

---

## ⚙️ Environment Configuration

- 🔑 Environment variables for API keys (OpenAI)
- 🚀 EAS (Expo Application Services) configuration for builds
- 📦 Different build profiles for development, preview, and production

---

## 🧪 Testing

- 🔄 End-to-end testing setup with Detox

---

## ✨ Notable Features

- 📱 **Responsive design** that adapts to different screen sizes
- 🎯 **Animated loading indicator**
- 📢 **Toast notifications** for user feedback
- 🎨 **Custom font integration**

The app is designed to be simple and focused on its core functionality of answering travel-related questions, with a clean UI and straightforward user experience.

---

## 🚀 Expo Setup

> **Important:** Preface all expo commands with `npx`  
> **Example:** `expo install` → `npx expo install [package]`

### 1. Install expo-dev-client
```bash
npx expo install expo-dev-client
```

### 2. Configure the Default URI Scheme
The development client needs a unique URI scheme to handle deep links. Configure this in `app.json` or `app.config.js` under the `expo` key.

### 3. Build the Development Client
Once expo-dev-client is installed, and you've set a URI scheme, we need to build the dev client for our project. This can be done using EAS Build or by running a local build.

#### Trigger a cloud build/locally:
```bash
# For Android
npx expo run:android

# For iOS
npx expo run:ios
```

#### Install Expo CLI
```bash
npm install -g expo-cli
```

#### Initialize project
```bash
npx expo init [directory]
```

### 4. Start Dev Server
```bash
cd [directory]
npm install
npx expo start
```

📚 **Read the docs:** [Expo Getting Started](https://docs.expo.dev/get-started/create-a-project/)

---

## 📱 Build For iOS

```bash
eas build --platform ios
```

---

## ⚠️ Known Issues & Solutions

### Expo CLI Deprecation
- ❌ **Issue:** Global install of expo-cli is deprecated
- ✅ **Solution:** For Node versions 17 and above, and Expo SDK 46 and onwards, it's recommended to use the local Expo CLI that comes bundled with our project

```bash
# Remove global installation
npm uninstall -g expo-cli

# Use local CLI with npx prefix
npx expo start
```

---

## 🧪 End-to-End Testing with Detox

For E2E testing, we're using Detox.

### 1. Install Detox and its CLI
```bash
npm install --save-dev detox
```

### 2. Configuration
Double-check config inside of `package.json`

### 3. Build and Test

#### For Android:
```bash
detox build --configuration android.emu.debug
detox test --configuration android.emu.debug
```

#### For iOS:
```bash
detox build --configuration ios.sim.debug
detox test --configuration ios.sim.debug
```

---

## ⚛️ React Native Environment Setup

### Prerequisites
- **Install Node.js and Watchman**
  ```bash
  brew install watchman
  ```

- **Install React Native CLI**
  ```bash
  npm install -g react-native-cli
  ```

### Initialize Project
```bash
npx react-native init app-name
```
*Scaffolds a new React Native project with all needed files and folders.*

---

## 💡 Development Tips

### IDE Requirements
- **iOS Development:** Use **Xcode** for iOS development
- **Android Development:** Download and install **Android Studio**

These tools provide necessary SDKs, emulators, and other utilities.

---

## 🔥 Backend - Firebase

### Deploy Functions
```bash
firebase deploy --only functions
```

---

## 🛠 Development Tools

### Linting
```bash
npm run lint -- --fix
```

### Debug Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl + D` | Open developer menu |
| `Cmd + Shift + K` | Clear Metro cache |

---

## 📦 Dependencies Summary

### Runtime Environment
- **Node.js** (implied by the use of Firebase Functions)

### Cloud Platform
- **Firebase** (specifically Firebase Cloud Functions)

### Key Dependencies
- **firebase-functions** - For creating and managing Firebase Cloud Functions
- **firebase-admin** - For Firebase admin SDK functionality
- **tesseract.js** - For Optical Character Recognition (OCR)
- **axios** - For making HTTP requests (used here to call the OpenAI API)

### External Services
- **OpenAI API** - Used for natural language processing of the extracted text

### Main Functionality
- **HTTP trigger function** (`processImage`)
- **Image OCR processing**
- **OpenAI API integration** for text analysis

---

## 🔄 Replicating in New Expo React Native App

To replicate this structure in a new Expo React Native app, you'll need to make some adjustments since this is a backend Cloud Function and not a mobile app. However, you can create a similar setup for your Expo app that interacts with this backend:

### Implementation Steps

1. **Set up a new Expo React Native project**

2. **Use Firebase SDK** in your Expo app to interact with Firebase services

3. **Create an API client** (possibly using Axios) in your Expo app to call the Cloud Function

4. **For image handling** in the app, you can use Expo's ImagePicker and FileSystem APIs

5. **Use React Native's fetch** or a library like Axios for making HTTP requests to your Firebase Function

### Important Note
Remember that the OCR and OpenAI processing would happen on the server-side (in the Cloud Function), not in the Expo app itself. Your Expo app would be responsible for capturing or selecting images, sending them to the Cloud Function, and then displaying the results.

---

<div align="center">

**Built with ❤️ for travelers worldwide**

*Making travel planning intelligent and accessible*

</div>
