# helper sandbox

A place for prototyping help systems

---

<a id="general-idea"> </a>

## General Idea

Currently, this app contains this user flow:

https://user-images.githubusercontent.com/59713582/136013950-90fe2c57-093e-41da-90c6-768b2b0b4866.mov

> --> you hover your mouse cursor over a feature
>
> --> a box asks if you need help
>
> --> you press a hotkey
>
> --> a help box shows you contextual help about the thing you were hovering over.

This was a learning project with a focus on front end design. Read about how it went in the [Development Story](#development-story) section below!

---

## Tech

-   [React](https://reactjs.org/)
-   [Framer-motion](https://www.framer.com/docs/introduction/) - A library for animating React components
-   [Tailwind CSS](https://tailwindcss.com/) - "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90"
-   [Figma Design Kit for Tailwind CSS](https://www.figma.com/community/file/768809027799962739)

---

## Credits

-   Icons from the above mentioned [Figma Design Kit for Tailwind CSS](https://www.figma.com/community/file/768809027799962739)
-   [UFO gif](https://giphy.com/gifs/fly-ufo-spaceship-26BoCVdjSJOWT0Fpu?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=) made by [Chris Gannon](https://twitter.com/chrisgannon) and found on [giphy.com](https://giphy.com/)

---

<a id="development-story"> </a>

## Development Story

### Big Ideas

I started this project because I wanted to impress a company. I saw their job ad, checked them out, got excited and decided on the spot I would code something to show them how cool I was.

The vision was to

> -   build a working app, possibly a user onboarding prototype (I was interested in that),
> -   using Tailwind (part of the company's tech stack)
> -   in 3-5 days.

Tailwind was new to me (but I loved to learn); I had never made a help system ( but I was interested in that); and I wanted this to be of high quality work (but also go from nothing to developed application in less than a week). Can you see the foreshadowing?

### Go With Your Gut

I went to work the next day with the plan of researching the company and gathering project ideas. I dove into their software, the public API, the forums, the learning resources, even the requested features. In the end, I had learned a lot, but something felt off. At the time I wrote:

> I felt kind of bad after this day's work. not sure why. But I have a hunch that deep down I know that I wasted some time - because I had a strong preference from the beginning = work on the onboarding. Should I have stayed more focused in my research?

I had gathered a large amount of data, but that data wasn't very relevant to what I really wanted to do. After sifting through it the next day and looking for viable ideas, I found myself adding options instead of whittling them down.

I remember feeling sort of confused when it was time to end the work day and go for my Feierabend bike ride. I didn't really know what I would do the next day - probably another round of deciding. But then, while pedalling through the forest, an old idea came back, at a time where I could very much put it to use. I was going to make a self-explaining app.

This software would have to fulfill 2 criteria:

    1. Be good at recognizing when the user needs help.

2. Give the user help that is useful for her current predicament.

Out of these constraints, the idea for a prototype. The app would consist of a rudimentary workbench - a stand-in for an app's main working area - and a help box - showing contextual help whenever it was needed. How does it know when it's needed? Well, whenever a user would hover their mouse cursor over an element for some time a smaller "nudge box" would appear, asking if help was desired. In effect, I wanted a better version of Microsoft's Clippy.

(to see this in action, look at the videoclip [here](#general-idea) at the top of this readme in the General Idea section)

Was this deep, novel and revolutionary? No. But after two days of prep-work I was feeling antsy. I was going to take this idea and go with it, even if it felt a little half-baked. I mention this, because it is foreshadowing.

### Are you finalized yet?

So into Figma I went. A Tailwind UI Kit I duplicated. I designed some elements, and it wasn't quite coming together. And so I got back in. Until, after a long day of re-designing, I was able to say "mmmyeah, I have... something... kind of."

![Design 1](https://user-images.githubusercontent.com/59713582/136380582-d4066dbd-af67-4b91-8e40-13573d70c57e.png)

This didn't sit right with me. So the next day I went in with a plan to give this thing a brutalist look. I thought this style would lend itself well to what I wanted to do - keep it simple, get this done fairly quickly and try to give this thing a unified look. I was iterating, but things never really felt right.

![Brutalist proto](https://user-images.githubusercontent.com/59713582/136382456-4afe502f-e143-4d12-a8f0-25498125a512.png)

But no worries. When I ran out of inspiration-juice, I would code. I was starting to get the hang of Tailwind. For a few hours I would go back and forth: code and put things on the screen - look at the results - shake my head - go back to Figma for a little redesign - adjust the HTML, etc.

At the end of the day I was discussing the project with my partner, who also happens to be a front end designer. She asked a very simple question that changed a lot: "Do you have a final design?"

Clearly, I did not. And I felt it. Being in a loop of design and destroy was getting to me. I didn't want to get stuck here.

The next day and a half were spent on designing my UI in Figma. Finally. And that's all I did. I was happy with my progress.

![Final Design](https://user-images.githubusercontent.com/59713582/136383569-5af12492-6026-4e45-9314-886e38593c56.png)

It felt completely differrent to do it this way. I had learned about the power of finalizing.

But what does finalizing a design really mean? I thought "well, it means knowing the layout and how every element looks." I thought I was done. (Foreshadowing.)

### Not Quite

The next couple of days went by steadily translating my designs into HTML. No new ideas, no meanderings. It was a time of peace and incremental change, etc.

This was new for me. I had never worked with design specs before. Now I had a static image of my UI in Figma and the goal was simple: recreate it in HTML and CSS. I had a reference to keep me focused and honest.

![Actual app](https://user-images.githubusercontent.com/59713582/136384427-6ec7417c-d5f0-4495-9eb3-2b3918dc83fd.png)

I was happy with the results. I did make some further adjustments. (The workbench was made wider to accommodate the input and output more easily. Most notably, I cut out the non-essential parts of the helpbox.) But, all in all, I was surprised at how close was able to get this to my Figma designs.

So I was at the point where every UI element of this app was "done" and I could put it on screen in its intended position. Yay! But wait, you say, that doesn't make an app. An app is about interactions. And sure, you have a basic idea of a user flow. But do you know what should happen in the case when the user moves the mouse cursor to another element while the help box is open?

https://user-images.githubusercontent.com/59713582/136386630-ed339cbd-a652-4ac8-aa4b-8151e6f8200f.mov

(I looked at a few ways to fix this but in the end left it as is. For now.)

And do you know how the nudge box animation should behave when a new one is started before the last one has finished? And have you thought how to even explain to the user what this site does in the beginning? - Do you display an intro text? Does it disappear? Is it gone forever then, or can you bring it back? etc. etc.

The point is: when I started thinking through the interactions, there turned out to be a lot of new questions.

I wasn't finalized at all. But I was at the end of my patience. This project was already taking longer than I had expected. I wanted to apply for a job, after all. So I fixed what I could fix easily and let the rest to be as is. It was actually an interesting meta challenge to adjust the design in a way that would minimise the set of possible bugs. I have much to learn. But at least I have a story to tell in my readme.

### The Joy of Tying Up Loose Ends

When everything was done and the thing was up and deployed, I was feeling like this project was a bit of a failure. The app was more or less working, but it was in a state that might easily be seen as "half assed". And even though I had put in a lot of work into it, when I actually looked at my codebase - I had to agree. My workbench component was still in App.js, for crying out loud. This was no way to apply for a front end dev job. No, I was going to do a refactor.

I mention this, because it had a surprisingly positive effects on how I viewed this project. Seeing my code tidy and commented made me feel good, much better than a day before (see paragraph above). I think I regained some of the essence of this project: to show off my good side, show something solid. And if the end product wasn't perfectly polished, at least my code was readable and filled with love.

![Nice code](https://user-images.githubusercontent.com/59713582/136398177-a8986329-2599-4ca4-9f41-cd5d8bd7fc94.png)

### Review

Looking at the past few weeks, these lessons stick out to me:

1.  _Finalizing the UI design was a turning point in this project (thank you, Gi)._

This was like leveling up. And I kept it Kanban for the remainder of the project - do one thing at a time, until it is finished, then go on to the next. This gave me a sense of progression that kept me going.

2.  _Narrowing the scope would have saved me some frustration_

As it was conceived, this project involved coming up with a user-flow, designing a UI, translating it into HTML and coding the JavaScript logic. I could have focused it up a bit. Maybe design a more polished prototype but stay in Figma, or start with a UI template but really go in on the number of features.

I also could have listened to my gut in the beginning and gone all into onboarding right away. That's what the gut is for - to make quick, heuristic-based decisions - and that situation seems like the right place to use it, in retrospect.

I would have researched in a more focused way which would have probably led to a more thought-out idea. This would have saved me much frustration in the long run. So many times in this project I have felt the clash of business concerns vs. design concerns:

> "I want to do this efficiently" (...and send my application earlier, thus maybe raising my chances of getting a job)

vs.

> "I want to do this thoroughly" (...and find a cleaner, more stable solution, thus maybe raising my chances of getting a job)

Truly, I contain multitudes of stakeholders.

The times were I had to say to myself "I am going to leave this semi-working" (which means semi-broken) were some of the most frustrating moments for me. Next time, I might make my life a little easier and the projects a bit smaller.

3.  _Design doesn't just mean appearance_

I'm interested in UX. I have been taking online courses. I thought I knew this. But that was not enough. I had to feel it.

I noticed very late that I had a vision... but not a user flow. I didn't have a clear view of the interactions. What are the possible combinations of help elements on the screen? How do they animate? Do the animations clash with each other? How does the resulting programming logic look like? Coding would have been easier if I had known these things. And I think the result would have been much more polished.

---

This was an important project for me. I found in it new levels of focus, grit and effectiveness. A big challenge was balancing efficiency with quality. Having faced these problems leaves me especially satisfied for some reason. - In the end I am glad that I finished and this didn't turn into one of those perennial projects.

Come to think of it, I had some ideas for a re-design...
