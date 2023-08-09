# Display

Objectives:
block, inline-block, inline




## Layout
display
- none
    - nothing shows up on page
- block
    - new line and stretches out to the left and right; default all available horizontal space
    - common block levels are 
        - div, p, and form
        - HTML5: header, footer, section, and more
- inline
    - wrap some text inside a paragraph without disrupting the flow of that paragraph
    - span, strong, b, and em, as well as the a tag
- inline-block 
    - a hybrid of block and inline



### inline-block vs. inline vs. block
- one more important feature of block elements vs. inline-elements discussed below
- inline elements dont respect the width and height properties, even though there's settings of the width and height properties for these elements (see index.html (maybe modified as a comment and corrections below it or somewhere inside)).  they are ony as large as the content inside of them requires.
- inline-block behave like inline, but you can set their width and height

- knowing this, return to the inline-block.  UPDATE the display on the last two divs in the index.html.
    - change thier display to inline-block instead of inline
    - last two divs now respect the width and height values
