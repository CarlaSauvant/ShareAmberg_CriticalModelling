// https://observablehq.com/@jienagu/network-d3-force-graph@79
function _1(md){return(
md`# Network D3 Force graph`
)}

function _d3(require){return(
require('d3@5')
)}

function _margin(){return(
{top: 30, right: 80, bottom: 30, left: 30}
)}

function _width(){return(
600
)}

function _height(){return(
400
)}

function _6(html){return(
html`
<style> 

.links line {
    stroke: #000;
    }
div.tooltip {
    position: absolute;
    background-color: white;
    max-width; 200px;
    height: auto;
    padding: 1px;
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .5);
    pointer-events: none;
  }

</style>`
)}

function _simulation(d3,width,height){return(
d3.forceSimulation()
    .force("link", d3.forceLink() // This force provides links between nodes
                    .id(d => d.id) // This sets the node id accessor to the specified function. If not specified, will default to the index of a node.
     ) 
    .force("charge", d3.forceManyBody().strength(-500)) // This adds repulsion (if it's negative) between nodes. 
    .force("center", d3.forceCenter(width / 2, height / 2))
)}

function _myChart(html,d3,width,margin,height,simulation)
{
  const div = html`<div style='max-width: 900px; overflow-x: auto; padding: 0px; margin: 0px;'></div>`;
  
  var tooltip = d3.select("body")
	.append("div")
	.attr("class", "tooltip")
	.style("opacity", 0);
  
      const svg = d3.select(div)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
  
      //create dummy data
    const dataset =  {
      nodes: [
        {id: 1,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic1.png",
        size: 50},
        {id: 2,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic2.png",
        size: 35},
        {id: 3,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic3.png",
        size: 55},
        {id: 4,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic4.png",
        size: 45},
        {id: 5,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic5.png",
        size: 52},
        {id: 6,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic6.png",
        size: 51},
        {id: 7,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic9.png",
        size: 60},
        {id: 8,
        img: "https://raw.githubusercontent.com/jienagu/Picture_gif_Personal_Web/master/network_pic10.png",
        size: 60}
      ], 
      links: [
        {source: 7, target: 1},
        {source: 7, target: 6},
        {source: 7, target: 2},
        {source: 7, target: 3},
        {source: 7, target: 8},
        {source: 8, target: 4},
        {source: 8, target: 5},
        {source: 8, target: 6}
      ]
    };


     // Initialize the links
    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(dataset.links)
      .enter().append("line")
      .style("stroke-width", 2.5 );


    // Initialize the nodes
    // add hover over effect
    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("image")
        .data(dataset.nodes)
      .enter().append("image")
        .attr("xlink:href",  function(d) { return d.img;})
        .attr("width",  function(d) { return d.size + 5;})
        .attr("height", function(d) { return d.size + 5;})
        .on("mouseover", function(d){d3.select(this)
                                       .transition()
                                       .duration(350)
                                       .attr("width",  70)
                                       .attr("height", 70)
                                   })
        .on("mouseout", function(d){d3.select(this)
                                       .transition()
                                       .duration(350)
                                       .attr("width",  function(d) { return d.size;})
                                       .attr("height", function(d) { return d.size;})
                                   })
      .on('mouseover.tooltip', function(d) {
      	tooltip.transition()
        	.duration(300)
        	.style("opacity", .8);
      	tooltip.html("ID:" + d.id + "<p/>Size:" + d.size )
        	.style("left", (d3.event.pageX) + "px")
        	.style("top", (d3.event.pageY + 10) + "px");
    	})
    .on("mouseout.tooltip", function() {
        tooltip.transition()
	        .duration(100)
	        .style("opacity", 0);
	    })
	   .on("mousemove", function() {
	      tooltip.style("left", (d3.event.pageX) + "px")
	        .style("top", (d3.event.pageY + 10) + "px");
	    })
        .call(d3.drag()  //sets the event listener for the specified typenames and returns the drag behavior.
            .on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
            .on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
            .on("end", dragended)     //end - after an active pointer becomes inactive (on mouseup, touchend or touchcancel).
         );

    //Listen for tick events to render the nodes as they update in your Canvas or SVG.
    simulation
        .nodes(dataset.nodes)//sets the simulation’s nodes to the specified array of objects, initializing their positions and velocities, and then re-initializes any bound forces;
        .on("tick", ticked);//use simulation.on to listen for tick events as the simulation runs.
        // After this, Each node must be an object. The following properties are assigned by the simulation:
        // index - the node’s zero-based index into nodes
        // x - the node’s current x-position
        // y - the node’s current y-position
        // vx - the node’s current x-velocity
        // vy - the node’s current y-velocity

    simulation.force("link")
        .links(dataset.links)
        .distance(function() {return 100;});


    // This function is run at each iteration of the force algorithm, updating the nodes position (the nodes data array is directly manipulated).
    function ticked() {
      link.attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

      node.attr("x", d => d.x - 25)
          .attr("y", d => d.y - 25);

    }
 //create zoom handler 
var zoom_handler = d3.zoom()
    .on("zoom", zoom_actions);

//specify what to do when zoom event listener is triggered 
function zoom_actions(){
 svg.attr("transform", d3.event.transform);
}

//add zoom behaviour to the svg element 
//same as svg.call(zoom_handler); 
zoom_handler(svg);
    
  
  
    //When the drag gesture starts, the targeted node is fixed to the pointer
    //The simulation is temporarily “heated” during interaction by setting the target alpha to a non-zero value.
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();//sets the current target alpha to the specified number in the range [0,1].
      d.fy = d.y; //fx - the node’s fixed x-position. Original is null.
      d.fx = d.x; //fy - the node’s fixed y-position. Original is null.
    }

    //When the drag gesture starts, the targeted node is fixed to the pointer
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    //the targeted node is released when the gesture ends
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      
      //console.log("dataset after dragged is ...",dataset);
    }
       return div
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("width")).define("width", _width);
  main.variable(observer("height")).define("height", _height);
  main.variable(observer()).define(["html"], _6);
  main.variable(observer("simulation")).define("simulation", ["d3","width","height"], _simulation);
  main.variable(observer("myChart")).define("myChart", ["html","d3","width","margin","height","simulation"], _myChart);
  return main;
}
