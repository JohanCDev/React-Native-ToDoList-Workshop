# Workshop React Native: Create a to do list
Be sure to install every [prerequisites](./SETUP.md) in order to complete the workshop

In this workshop you will:

- Discover a language that allow you to code application on different platforms
- Discover hooks to replace classes
- Learn how to do animations
- Learn how to use a Typing overlay to correctly use your variables

## What is React-Native

[React Native](https://reactnative.dev) is an open-source UI software framework created by Meta Platforms, Inc.

It's used to develop applications on many operating systems with React framework along with native platform capabilities.

## What is Expo

[Expo](https://expo.dev) is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

It's used to easily translate React framework to the native language of your device.

## How will we compile ?

We simply have to launch a packager between expo and your phone.

To do this, simply run `expo start`.

Press `d` to open developer tools and enable `tunnel mode`.

Then, scan the qr code on your phone to have your new application. (On your camera for iOS and in Expo App for Android)

## Step 1 - Create your first Application

Start by creating a Typescript basic app with `expo init MyToDoListApp`

Try to launch it on your phone, you should see something like this

![Alt Text](./ScreenShots/Basic.jpeg)

Congrats ! You created an application !

## Step 2 - Create a basic view around your To Do list

Change the colors and properties of your view to have a basic view that will be around your future todo list.

Add a Title in the upper left corner, try to make it visible but not invasive.

Style your background and your text to make your launching view welcoming for users.

One of the power of React-Native is it's community, developers around the world share packages that you can use in your applications.

A famous one helps you doing a linear gradient for your views, try to install it and use it for your background if you want !

You can easily have something like this.
![Alt Text](./ScreenShots/StyledView.jpeg)