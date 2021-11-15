# js-flex-gallery-practice
JS Day 5!

# HTML
- A parent div with class of "panels" 
- 5 children divs with class of "panel" as well as individual panel class ("panel1" "panel2" "panel3" "panel4" "panel5")
- Each child div has 3 p tags in it (each with one word)

# CSS
- Styling for the parent element ("panels"): CONTAINER
    - Transition: font seiz; flex; background;
    - display: flex; 
- Styling for each child element (individual panel): ITEM & CONTAINER
    - each individual children ("panel1") has an image set as background-image) 
    - flex: 1 (each panel will evenly distribute the extra space)
    - justify-content: center
    - align-items: center
    - display: flex (nest a flex-box!)
    - flex-direction: column;
- Flex children (if the child is the container, this is the grandchild-- the p elements inside). FLEX ITEMS. This is denoted in this CSS file as p > *.
    - flex: 1 0 auto;
    - display: flex
    - justify-content: center
    - align-items: center 

- make each of the first children of panel -100% (push to top)
    - .panel > *:first-child { transform: translateY(-100%)}
- make each of the last children of panel 100% (push to bottom)
    - .panel > *:last-child { transform: translateY(100%)}
- when the panel has a class "open-active", remove that translateY: 
    - .panel.open-active > *:first-child { transform: translateY(0)}
    - .panel.open-active > *:last-child { transform: translateY(0)}

# JS
- grab the DOM elements (.panel) as querySelectorAll 
