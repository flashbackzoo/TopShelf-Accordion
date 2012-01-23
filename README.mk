#TopShelf - Accordion
The Accordion plugin for jQuery.

## Setup
###Add the dependencies

    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="js/ts-accordion.js"></script>
    <link rel="stylesheet" href="css/ts-accordion.css"> <!-- required -->
    <link rel="stylesheet" href="css/simple.css"> <!-- theme -->

###Add some markup.
We use custom data attributes for JavaScript hooks. CSS classes are used purely for skinning.

    <div class="accordion" data-ui="accordion">
        <div class="panel" data-ui="accordion-panel">
            <a href="" class="handle" data-ui="accordion-handle">First</a>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div class="panel" data-ui="accordion-panel">
            <a href="" class="handle" data-ui="accordion-handle">Second</a>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
        <div class="panel" data-ui="accordion-panel">
            <a href="" class="handle" data-ui="accordion-handle">Third</a>
            <p>
                Lorem ipsum dolor sit amet.
            </p>
        </div>
    </div>

###Hook it up
Turn the markup into a Accordion. Add this script directly before your closing body tag.

    <script>
        $(function(){
            $("[data-ui='accordion']").tsAccordion();
        });
    </script>

## Options
You can pass .tsAccordion() some optional settings. Here are the defaults...

    $("[data-ui='accordion']").tsAccordion({
        "transition": "simple"
        , "multiOpen": false
        , "startOpen": false
    });

### transition
The type of transition to use.

### multiOpen
Set to true if you want to open multiple panels at once.

### startOpen
Set to true if you want panels to be open by default.

## Demo
[http://flashbackzoo.net/topshelf-accordion/simple.html](http://flashbackzoo.net/topshelf-accordion/simple.html)