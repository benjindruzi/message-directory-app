# Message Directory App

A lightweight React Native application built with Expo that organizes and displays prewritten messages in categorized “directories.”

## What It Does

- **Home Screen**: Shows a grid of six message categories (You, Home, Love, Family, Friends, School), each represented by an icon and label.
- **Messages Screen**: Tapping a category navigates to a list of hard-coded message templates for that category.
- **Navigation**: Uses React Navigation’s stack navigator to move between screens, with the header title updating dynamically based on the selected category.
- **Assets**: Icons are stored as local images.

## Project Structure

```
message-directory-app/
├── App.tsx                # Entry point & navigation setup
├── app.json               # Expo configuration
├── package.json           # npm scripts & dependencies
├── tsconfig.json          # TypeScript configuration (extends expo/tsconfig.base)
├── .gitignore
├── README.md              # (this file)
├── assets/
│   └── images/            # Category icons
│       ├── you.png
│       ├── home.png
│       ├── love.png
│       ├── family.png
│       ├── friends.png
│       └── school.png
└── screens/
    ├── HomeScreen.tsx     # Grid layout of category cards
    └── MessagesScreen.tsx # Scrollable list of messages
```

## Getting Started

### Prerequisites

- **Node.js** LTS (version 16.x or later)
- **npm** or **yarn**
- **Expo CLI** (no global install required; use `npx`)
- **Physical device** with Expo Go installed, or iOS Simulator / Android Emulator

### 1. Clone & Install

```bash
git clone https://github.com/benjindruzi/message-directory-app.git
cd message-directory-app
npm install
```  

### 2. Start the Development Server

```bash
npx expo start
```  
By default, Expo will run in **LAN** mode. If you are on a restrictive network, you can switch to **Tunnel** mode:

```bash
npx expo start --tunnel
```

### 3. Run on Device or Simulator

- **Physical Device**: Open **Expo Go** and scan the QR code shown in the terminal or DevTools.
- **iOS Simulator**:  
  ```bash
  npx expo run:ios
  ```
- **Android Emulator**:  
  ```bash
  npx expo run:android
  ```
