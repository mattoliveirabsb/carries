/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'_10',
            type:'image',
            rect:['0px','0px','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"10.png",'0px','0px']
         },
         {
            id:'_12',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"12.png",'0px','0px']
         },
         {
            id:'_2',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"2.png",'0px','0px']
         },
         {
            id:'_3',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"3.png",'0px','0px']
         },
         {
            id:'_42',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"42.png",'0px','0px']
         },
         {
            id:'_5',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"5.png",'0px','0px']
         },
         {
            id:'_6',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"6.png",'0px','0px']
         },
         {
            id:'_7',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"7.png",'0px','0px']
         },
         {
            id:'_8',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"8.png",'0px','0px']
         },
         {
            id:'_9',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"9.png",'0px','0px']
         },
         {
            id:'_102',
            type:'image',
            rect:['0','0','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"102.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${__3}": [
            ["style", "opacity", '0']
         ],
         "${__5}": [
            ["style", "opacity", '0']
         ],
         "${__2}": [
            ["style", "opacity", '0']
         ],
         "${__12}": [
            ["style", "opacity", '0']
         ],
         "${__7}": [
            ["style", "opacity", '0']
         ],
         "${__9}": [
            ["style", "opacity", '0']
         ],
         "${__10}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.2'],
            ["style", "left", '0px']
         ],
         "${__8}": [
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${__6}": [
            ["style", "opacity", '0']
         ],
         "${__102}": [
            ["style", "opacity", '0']
         ],
         "${__42}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20500,
         autoPlay: true,
         timeline: [
            { id: "eid46", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 500 },
            { id: "eid74", tween: [ "style", "${__9}", "opacity", '1', { fromValue: '0.000000'}], position: 18000, duration: 500 },
            { id: "eid26", tween: [ "style", "${__10}", "opacity", '0.2', { fromValue: '0.2'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 500 },
            { id: "eid38", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
            { id: "eid52", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 500 },
            { id: "eid78", tween: [ "style", "${__102}", "opacity", '1', { fromValue: '0.000000'}], position: 20000, duration: 500 },
            { id: "eid34", tween: [ "style", "${__12}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid70", tween: [ "style", "${__8}", "opacity", '1', { fromValue: '0.000000'}], position: 16000, duration: 500 },
            { id: "eid56", tween: [ "style", "${__6}", "opacity", '1', { fromValue: '0.000000'}], position: 12000, duration: 500 },
            { id: "eid66", tween: [ "style", "${__7}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "mecanica-de-trabalho");
