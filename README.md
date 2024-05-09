Shipy
=========
Shipy is a game where the player, using the arrow keys on the keyboard, controls a spaceship with the objective of growing in size by colliding with smaller ships, while avoiding larger ones to survive. When the player starts the game, spaceships spawn in random sizes from the sides of the screen and travel until they disappear on the other side. Shipy keeps track of the number of ships eliminated and displays the score.

![Capture](https://github.com/Rafa-Camp04/Shipy/assets/161013936/a73db07d-0d40-4975-bd50-b516cdfec0d3)

Functionality & MVPs
----------------------
__In this game, users will be able to:__

* __Start and pause the game board:__

![Capture2](https://github.com/Rafa-Camp04/Shipy/assets/161013936/edc0a032-2d0d-4666-82b6-7ffbf029b6fe)
![Capture](https://github.com/Rafa-Camp04/Shipy/assets/161013936/01f835f9-2a93-4fb4-8829-5dfb5c2699bb)


* __Move the spaceship around the screen:__

![Capture](https://github.com/Rafa-Camp04/Shipy/assets/161013936/f7286875-a13c-40c2-a9fd-b83aa65cec47)
![Capture](https://github.com/Rafa-Camp04/Shipy/assets/161013936/b75feb29-0803-4e5e-a89a-0972cdae1995)
  
* __Keep track of the score in real time:__

![1066dd667858a751b7bd5135271be376](https://github.com/Rafa-Camp04/Shipy/assets/161013936/1615b464-b3da-4534-811c-6afcb9e27ad9)

Wireframe:
----------
![wireframe](https://github.com/Rafa-Camp04/Shipy/assets/161013936/1b243a8e-2fee-42ba-8b3e-48fae7d70fe2)

* __Controls:__ Explains how to use the keyboard arrows for movement.
* __Instructions:__ Provides information about how the game works.
* __Game Screen:__ This is the area where the game is running.
* __Score:__ This section displays the score of the player.
* __Settings:__ Future implementations.

Technologies, Libraries, APIs:
---------------------------------
1. __JavaScript (ES6+):__ It will be used for implementing game logic, player controls, and interactions within the game environment.
2. __Webpack__ to bundle and transpile the source JavaScript code.
3. __HTML5 Canvas:__ For rendering graphics and creating the game's visual interface.
4. __CSS:__ For styling the game's user interface, including layout, colors, and animations.
5. __NPM:__ To manage project dependencies
6. __Sprite:__ Used for animations.

Implementation Timeline:
-------------------------
* Thursday: Set up the canvas and begin by adding circle objects.
* Friday: Implement object movement and test collision detection.
* Weekend: Develop spawning mechanics for objects with random sizes and disappearance upon crossing the screen.
* Monday: Enhance object visuals with spaceship animations.
* Tuesday: Implement score counting functionality and fix bugs.
* Wednesday: Style the page.
* Thursday Morning: Write instructions about the project on README file.

Bonus:
--------
* Incorporate music with a mute button and volume control range.
* Introduce skins as rewards for achieving specific scores.
* Implement buttons to select different backgrounds.
