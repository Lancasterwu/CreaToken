---
title: Blue Print of CreaToken
date: "2019-03-08"
featuredImage: './blue_print.jpg'
---

Welcome to CreaToken, I hope you enjoy your stay! This is the blue print of what I am going to do with this site.

<!-- end -->

### Abstract

> **The purpose of this project is to build a user interactive platform for trading ideas with the virtual currency.**

It is statically generated via GatsbyJS, comes with syntax highlighting (via PrismJS) out of the box, and has server-side rendering built-in, among other things. It allows users to post blogs, to comment under other users' blogs, to trade virtual currency with other people.

### The Key Features and Challenges

The name of the project is **CreaToken**, which refers to Token(virtual currency) for creativity. The most important feature that needs to be implemented is the token trading. The website should be able to store data and provide information about the amount of tokens users are having. Then different users should be able to trade their tokens. However, the hardest part probably will be creating tokens which I will explain in the structure section. The second most important should be posts and comments. Users should be able to make posts and be able to make comments under other users' posts. The challenge here is the "comment of the comment." The code of this part of the program and the interface are prone to bugs, so they need to be carefully designed. Users' upload for their posts such as images or videos is another thing I need to worry about. I solution probably will be not allowing them to upload videos.

### The Secondary Features

One of the secondary features can be the web-page language translator. As an international student, I may invite people who speak Chinese and who speak English to use it at the same time, so a language translator is necessary to be implemented. Another secondary feature will be the enhanced text editor that people can use when they are editing the post or comment. This includes allowing them to add emojis, change the font, size, color of the characters, be able to make them bold, italic. However, all of these are secondary features so I will not implement them before I finish the key feature.

### The Ideal Structure

![Structure](./Idealstructure.png)

There will be two different types of blog. The first one is the **Thought Blog** which supposes to provide some random creative thoughts at random location. Users who post this kind of posts can generate some tokens which can be used for the second type of blog posts. The second type is the **Reward Blog** which throws a problem that needs to be solved with a creative idea. The user who posts this will announce the amount of reward as the virtual currency then he should pick one answer that is most helpful for him and give that answerer reward tokens. This way there are always a limited amount of tokens flow since they are generated based on creativity which made them reliable. The main page will contain some recommend blog posts for both types.

### Todo Tasks

* Provide the general structure of the user-interactive website
* Allow users to post new blogs for other users to access
* Allow users to comment under the existing blogs
* Allow users to comment other users' comment
* Allow users to generate virtual currency with posts
* Allow users to store virtual currency and check the amount they have
* Allow users to trade the virtual currency
* Secondary features
