//First we select the color of the backround of our page
document.body.style.background = "black";

// SOME RANDOM FUNCTIONS THAT IF I DELETE IT DOES NOT WORK
function _1(md){return(md``)}
function _2(md){return(md``)}
function _d3(require){return(require('d3@5'))}
function _margin(){return({top: 30, right: 80, bottom: 5, left: 5})}
function _width(margin){return(2000 - margin.left - margin.right)}
function _height(margin){return(500 - margin.top - margin.bottom)}

// HERE WE CAN CHANGE THE LOOK OF THE NETWORK DIAGRAM
function _7(html){
// language=HTML format=false
// language=HTML
    return(
html`
    <style>
        .links {
        / / stroke: #FFFFFF;
            stroke-opacity: 1;
        / / stroke-width: 50px;
        }

        text {
            pointer-events: none;
            fill: #ffffff;
            font: 12px "Courier New";
            align-content: center;
            
        }

        svg {
            border: 1px solid #000;
        }

    </style>`
)}

function _8(md){return(md``)}

//FUNCTION D3 IS OUR NETWORK DIAGRAM
// HERE WE CAN CHANGE THE COLORS OF THE DOTS INTO THE NETWORK (FUNCTION D3)
function _colorScale(d3){return(
d3.scaleOrdinal() //=d3.scaleOrdinal(d3.schemeSet2)
    .domain([
        "Actors - City Administration",
        "Actors - Citizenship",
        "Actors - Educational Institutions",
        "Actors - State",
        "Actors - Corporate Relations",
        "Headlines",
        "Data"])
    .range(['#93ee74', '#ffc284', '#43b6b3','#508f86','#9e79db',,'#93ee74','#93ee74'])
)}

function _simulation(d3,width,height){return(
d3.forceSimulation()
    .force("link", d3.forceLink() // This force provides links between nodes
                    .id(d => d.id) // This sets the node id accessor to the specified function. If not specified, will default to the index of a node.
                    .distance(100 //THIS IS THE DISTANCE BETWEEN THE DOTS
                    )
     )
    .force("charge", d3.forceManyBody().strength(-200)) // THIS NUMBER (IF IT'S NEGATIVE) ADDS REPULSION BETWEEN THE NODES
    .force("center", d3.forceCenter(width / 2, height / 2))
)}
// ANOTHER FUNCTION THAT I DON'T KNOW WHAT IT DOES
function _myChart(html,d3,width,margin,height,colorScale,simulation)
{
  const div = html`<div style='max-width: 900px; overflow-x: auto; padding: 0px; margin: 0px;'></div>`;
  const svg = d3.select(div)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

  
//DATASET OF OUR NETWORK DIAGRAM

const dataset =  {
  nodes: [
      {id:1, name:"Emergency Protocol", group:"Headlines", runtime:60},
      {id:2, name:"Soil Conditions", group:"Headlines", runtime:60},
      {id:3, name:"Riverbed Conditions", group:"Headlines", runtime:60},
      {id:4, name:"Amberg Alliance for Families", group:"Actors - Citizenship", runtime:60},
      {id:5, name:"Climate Protection Office", group:"Actors - City Administration", runtime:60},
      {id:6, name:"City Planning Office", group:"Actors - City Administration", runtime:60},
      {id:7, name:"Crossections of the riverbed", group:"Data", runtime:60},
      {id:8, name:"Population Count Amberg", group:"Data", runtime:60},
      {id:9, name:"Locations of Shelters", group:"Data", runtime:60},
      {id:10, name:"Riverbed Stratigraphy", group:"Data", runtime:60},
      {id:11, name:"Chemical Analysis", group:"Data", runtime:60},
      {id:12, name:"Deformations", group:"Data", runtime:60},
      {id:13, name:"Drainage Channels", group:"Data", runtime:60},
      {id:14, name:"Emergency Energy Plan", group:"Data", runtime:60},
      {id:15, name:"Evacuation Plan", group:"Data", runtime:60},
      {id:16, name:"Riverbed: Gradient and Bed Material", group:"Data", runtime:60},
      {id:17, name:"Satellite Images", group:"Data", runtime:60},
      {id:18, name:"Aerial Images", group:"Data", runtime:60},
      {id:19, name:"Canal Cadastre", group:"Data", runtime:60},
      {id:20, name:"Street Cadastre", group:"Data", runtime:60},
      {id:21, name:"Survey About Floodings Impact on Personal Life", group:"Data", runtime:60},
      {id:22, name:"Sensor Maintnance Data", group:"Data", runtime:60},
      {id:23, name:"Flooded Areas", group:"Data", runtime:60},
      {id:24, name:"Water Quality", group:"Data", runtime:60},
      {id:25, name:"Rainfall Levels", group:"Data", runtime:60},
      {id:26, name:"River Discharge", group:"Data", runtime:60},
      {id:27, name:"Water Level Gauge", group:"Data", runtime:60},
      {id:28, name:"Flood Protection Wall", group:"Data", runtime:60},
      {id:29, name:"Ecluse", group:"Data", runtime:60},
      {id:30, name:"Floodgates", group:"Data", runtime:60},
      {id:31, name:"Injuries and Casualties", group:"Data", runtime:60},
      {id:32, name:"Past Flood Damages", group:"Data", runtime:60},
      {id:33, name:"Cost of Flood Prevention", group:"Data", runtime:60},
      {id:34, name:"Citizen Surveys", group:"Headlines", runtime:60},
      {id:35, name:"Mapping - Hazard and Inundation", group:"Headlines", runtime:60},
      {id:36, name:"Architecture Competition on Flood Wall", group:"Headlines", runtime:60},
      {id:37, name:"City Maps", group:"Headlines", runtime:60},
      {id:38, name:"River Water", group:"Headlines", runtime:60},
      {id:39, name:"Infrastructure Objects", group:"Headlines", runtime:60},
      {id:40, name:"Flooding History", group:"Headlines", runtime:60},
      {id:41, name:"Socioeconomic Development", group:"Headlines", runtime:60},
      {id:42, name:"Education Program on Flood Protocols", group:"Headlines", runtime:60},
      {id:43, name:"Citizens", group:"Actors - Citizenship", runtime:60},
      {id:44, name:"TUM", group:"Actors - Educational Institutions", runtime:60},
      {id:45, name:"Schools", group:"Actors - Educational Institutions", runtime:60},
      {id:46, name:"Hochschule Amberg", group:"Actors - Educational Institutions", runtime:60},
      {id:47, name:"State of Bavaria", group:"Actors - State", runtime:60},
      {id:48, name:"Civil Participation Office", group:"Actors - City Administration", runtime:60},
      {id:49, name:"City Council", group:"Actors - City Administration", runtime:60},
      {id:50, name:"Office of Social Affairs", group:"Actors - City Administration", runtime:60},
      {id:51, name:"City Archive", group:"Actors - City Administration", runtime:60},
      {id:52, name:"Civil Engineering Office", group:"Actors - City Administration", runtime:60},
      {id:53, name:"Budget + Tax Office", group:"Actors - City Administration", runtime:60},
      {id:54, name:"SentinelHUB", group:"Actors - Corporate Relations", runtime:60},
      {id:55, name:"Bayern Atlas", group:"Actors - Corporate Relations", runtime:60},
      {id:56, name:"Bayernwerke", group:"Actors - Corporate Relations", runtime:60},
      {id:57, name:"Water management Office in Weiden", group:"Actors - Corporate Relations", runtime:60},
      {id:58, name:"Auerheimer Engineering Bureau", group:"Actors - Corporate Relations", runtime:60},
      {id:59, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60}
	],
  links: [
      {source: 1, target:4},
      {source: 42, target:4},
      {source: 2, target:5},
      {source: 3, target:5},
      {source: 22, target:5},
      {source: 35, target:5},
      {source: 36, target:5},
      {source: 38, target:5},
      {source: 2, target:6},
      {source: 3, target:6},
      {source: 35, target:6},
      {source: 36, target:6},
      {source: 37, target:6},
      {source: 38, target:6},
      {source: 3, target:7},
      {source: 37, target:7},
      {source: 1, target:8},
      {source: 1, target:9},
      {source: 2, target:10},
      {source: 2, target:11},
      {source: 2, target:12},
      {source: 3, target:12},
      {source: 3, target:13},
      {source: 1, target:14},
      {source: 1, target:15},
      {source: 3, target:16},
      {source: 37, target:17},
      {source: 37, target:18},
      {source: 37, target:19},
      {source: 37, target:20},
      {source: 34, target:21},
      {source: 37, target:23},
      {source: 40, target:23},
      {source: 38, target:24},
      {source: 38, target:25},
      {source: 38, target:26},
      {source: 38, target:27},
      {source: 39, target:27},
      {source: 36, target:28},
      {source: 39, target:28},
      {source: 39, target:29},
      {source: 39, target:30},
      {source: 40, target:31},
      {source: 40, target:32},
      {source: 41, target:32},
      {source: 39, target:33},
      {source: 41, target:33},
      {source: 3, target:38},
      {source: 1, target:42},
      {source: 34, target:43},
      {source: 36, target:43},
      {source: 42, target:44},
      {source: 42, target:45},
      {source: 36, target:46},
      {source: 41, target:47},
      {source: 34, target:48},
      {source: 36, target:48},
      {source: 36, target:49},
      {source: 42, target:50},
      {source: 40, target:51},
      {source: 41, target:51},
      {source: 39, target:52},
      {source: 41, target:52},
      {source: 41, target:53},
      {source: 37, target:54},
      {source: 37, target:55},
      {source: 1, target:56},
      {source: 3, target:57},
      {source: 35, target:57},
      {source: 38, target:57},
      {source: 39, target:57},
      {source: 40, target:57},
      {source: 38, target:58},
      {source: 38, target:59}
  ]
};

    console.log("dataset is ...",dataset);

// HERE WE CAN CHANGE THE STYLE OF THE LINKS
const link = svg.selectAll(".links")
        .data(dataset.links)
        .enter()
        .append("line")
        .attr("class", "links")
        .attr("stroke","#FFFFFF")
        .attr("stroke-width","2px")
        .style("opacity", 0.85)
        .attr("id",d=> "line"+d.source+d.target)
        .attr("class", "links")



//The <title> element provides an accessible, short-text description of any SVG container element or graphics element.
//Text in a <title> element is not rendered as part of the graphic, but browsers usually display it as a tooltip.
link.append("title")
    .text(d => d.type);

const edgepaths = svg.selectAll(".edgepath") //make path go along with the link provide position for link labels
        .data(dataset.links)
        .enter()
        .append('path')
        .attr('class', 'edgepath')
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .attr('id', function (d, i) {return 'edgepath' + i})
        .style("pointer-events", "none");

const edgelabels = svg.selectAll(".edgelabel")
        .data(dataset.links)
        .enter()
        .append('text')
        .style("pointer-events", "none")
        .attr('class', 'edgelabel')
        .attr('id', function (d, i) {return 'edgelabel' + i})
        .attr('font-size', 5)
        .attr('fill', '#aaa');

edgelabels.append('textPath') //To render text along the shape of a <path>, enclose the text in a <textPath> element that has an href attribute with a reference to the <path> element.
    .attr('xlink:href', function (d, i) {return '#edgepath' + i})
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .attr("startOffset", "50%")
    .text(d => d.type);
  
// Initialize the nodes
const node = svg.selectAll(".nodes")
    .data(dataset.nodes)
    .enter()
    .append("g")
    .attr("class", "nodes")

node.call(d3.drag() //sets the event listener for the specified typenames and returns the drag behavior.
        .on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
        .on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
    );

// HERE WE CAN CHANGE THE STYLE OF THE DOTS
node.append("circle")
    .attr("r", d=> 17)//+ d.runtime/20 )
    .attr("id",d=> "circle"+d.id)
    .style("stroke", "white")
    .style("stroke-opacity",0.3)
    .style("stroke-width", d => d.runtime/10)
    .style("fill", d => colorScale(d.group))

node.append("title")
    .text(d => d.id + ": " + d.label + " - " + d.group +", runtime:"+ d.runtime+ "min");

//HERE WE CAN SHOW THE LABLE OF THE NODE
node.append("text")
    .attr("dy", 4)
    .attr("dx", -15)
    .text(d => d.name);

  //set up dictionary of neighbors
  var neighborTarget= {};
  for (var i=0; i < dataset.nodes.length; i++ ){
    var id = dataset.nodes[i].id;
    neighborTarget[id] = dataset.links.filter(function(d){
      return d.source == id;
    }).map(function(d){
      return d.target;
    })
  }
  var neighborSource = {};
  for (var i=0; i < dataset.nodes.length; i++ ){
    var id = dataset.nodes[i].id;
    neighborSource[id] = dataset.links.filter(function(d){
      return d.target == id;
    }).map(function(d){
      return d.source;
    })
  }
  
console.log("neighborSource is ",neighborSource);
console.log("neighborTarget is ",neighborTarget);
  
 node.selectAll("circle").on("click",function(d){

            var active = d.active? false : true // toggle whether node is active
            , newStroke = active ? "blue":"grey"
            , newStrokeIn = active ? "red":"grey"
            , newStrokeOut = active? "red": "grey"
            , newOpacity = active? 0.6: 0.3
            , subgraphOpacity = active? 0.9:0;

            //extract node's id and ids of its neighbors
            var id =d.id
            , neighborS = neighborSource[id]
            , neighborT = neighborTarget[id];
            console.log("neighbors is from ",neighborS," to ", neighborT);
            d3.selectAll("#circle"+id).style("stroke-opacity", newOpacity);
            d3.selectAll("#circle"+id).style("stroke", newStroke);
   
            d3.selectAll("#subgraph").style("opacity",subgraphOpacity)

            //HERE WE CAN HIGHLIGHT THE CLICKED NODE AND ITS NEIGHBORS
            for (var i =0; i < neighborS.length; i++){
              d3.selectAll("#line"+neighborS[i]+id).style("stroke", newStrokeIn);
              d3.selectAll("#circle"+neighborS[i]).style("stroke-opacity", newOpacity).style("stroke", newStrokeIn);
            }
            for (var i =0; i < neighborT.length; i++){
              d3.selectAll("#line"+id+neighborT[i]).style("stroke", newStrokeOut);
              d3.selectAll("#circle"+neighborT[i]).style("stroke-opacity", newOpacity).style("stroke", newStrokeOut);
            }
            //update whether or not the node is active
            d.active =active;
 })

  
  
 //Listen for tick events to render the nodes as they update in your Canvas or SVG.
 simulation
        .nodes(dataset.nodes)
        .on("tick", ticked);

simulation.force("link")
        .links(dataset.links);


// This function is run at each iteration of the force algorithm, updating the nodes position (the nodes data array is directly manipulated).
function ticked() {
  link.attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

  node.attr("transform", d => `translate(${d.x},${d.y})`);

  edgepaths.attr('d', d => 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y);
}

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
  
  //drawing the legend
  const legend_g = svg.selectAll(".legend")
  .data(colorScale.domain())
  .enter().append("g") 
  .attr("transform", (d, i) => `translate(${width},${i * 20})`); 

  legend_g.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 5)
    .attr("fill", colorScale);

  legend_g.append("text")
    .attr("x", 10)
    .attr("y", 5)
    .text(d => d);
  
  //drawing the second legend
  const legend_g2 = svg.append("g") 
  //.attr("transform", (d, i) => `translate(${width},${i * 20})`); 
  .attr("transform", `translate(${width}, 120)`);
  
  legend_g2.append("circle")
    .attr("r", 5)
    .attr("cx", 0)
    .attr("cy", 0)
    .style("stroke", "grey")
    .style("stroke-opacity",0.3)
    .style("stroke-width", 15)
    .style("fill", "black")
  legend_g2.append("text")
     .attr("x",15)
     .attr("y",0)
     .text("long runtime");
  
    legend_g2.append("circle")
    .attr("r", 5)
    .attr("cx", 0)
    .attr("cy", 20)
    .style("stroke", "grey")
    .style("stroke-opacity",0.3)
    .style("stroke-width", 2)
    .style("fill", "black")
  legend_g2.append("text")
     .attr("x",15)
     .attr("y",20)
     .text("short runtime");
  
  
    return div
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("margin")).define("margin", _margin);
  main.variable(observer("width")).define("width", ["margin"], _width);
  main.variable(observer("height")).define("height", ["margin"], _height);
  main.variable(observer()).define(["html"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("colorScale")).define("colorScale", ["d3"], _colorScale);
  main.variable(observer("simulation")).define("simulation", ["d3","width","height"], _simulation);
  main.variable(observer("myChart")).define("myChart", ["html","d3","width","margin","height","colorScale","simulation"], _myChart);
  return main;
}
