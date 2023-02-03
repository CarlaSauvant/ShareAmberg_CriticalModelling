//First we select the color of the backround of our page
document.body.style.backgroundColor = "#19131f";

// These are functions that use a syntax from a library called Observable, specifically the markdown cells.
//
// _d3 imports the version 5 of the D3 library and returns it.
// _margin returns an object with a property window.
// _width returns the value of window.innerWidth.
// _height returns the value of window.innerHeight.

function _1(md){}
function _2(md){}
function _d3(require){return(require('d3@5'))}
function _margin(){return({window})}
function _width(){return(window.innerWidth)}
function _height(){return(window.innerHeight)}


// HERE WE CAN CHANGE THE LOOK OF THE NETWORK DIAGRAM
function _7(html){
    return(`
    <style>
        .links {
            stroke-opacity: 1;}
        
        .group-Actors-City-Administration {
            stroke: #2e7516;
        }
        
        .group-Actors-Citizenship {
            stroke: #ffc284;
        }
        
        .group-Actors-Educational-Institutions {
            stroke: #43b6b3;
        }
        
        .group-Actors-State {
            stroke: #508f86;
        }
        
        .group-Actors-Corporate-Relations {
            stroke: #9e79db;
        }
        
        .group-Headlines {
            stroke: #93ee74;
        }
        
        .group-Data {
            stroke: #93ee74;
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
    .range(['#93ee74', '#ffc284', '#43b6b3','#508f86','#9e79db','#93ee74','#93ee74'])
)}


function _simulation(d3,width,height){
    return(
        d3.forceSimulation()
            .force("link", d3.forceLink()
                .id(d => d.id)
                .distance(20)
            )
            .force("charge", d3.forceManyBody().strength(-100))
            .alphaTarget(0)
    )}

// The function "_myChart" creates an svg element, which is a scalable vector graphic,
// that will be appended to a div. It sets the width and height of the svg element,
// including the margins, and uses the "transform" attribute to translate the graphic
// to the left and top. It also sets the "align" attribute of the "g" element to "center".


function _myChart(html, d3, width, margin, height, colorScale, simulation) {
    // Event listener for search bar
    var foundElements = {};
    const div = html`<div style='max-width: window.innerwidth; margin: 0;'>
    <input type="text" id="searchInput" placeholder="Search nodes" oninput="{
        const dataset = {nodes:[
            {keywords:'ABC'},{keywords:'bcd'},{keywords:'edg'},{keywords:'flood'}]};
        const searchTerm = this.value.toLowerCase();
        console.log((this.dataset.nodes))
        foundElements = dataset.nodes.filter(function (node){ node.keywords.toLowerCase().includes(searchTerm)});
        console.log(foundElements);
    }">
  </div>`;

    const searchInput = d3.select("#searchInput");
    console.log(typeof(searchInput))

    const svg = d3.select(div)
        .append("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight)
        .append("g")
        .attr("transform", `translate(${50},${50})`)
        .attr("align", "center");

    // Update function to show only filtered nodes
    function update(filteredNodes) {
        const circles = svg.selectAll("circle").data(filteredNodes);
        circles.exit().remove();
        circles.enter().append("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", function(d) { return d.size; })
            .style("fill", function(d) { return colorScale(d.group); });
    }





//DATASET OF OUR NETWORK DIAGRAM
    const dataset =  {
        nodes: [
            {id:1, name:"Emergency Protocol", group:"Headlines", runtime:60, size: 30, keywords:"Emergency Protocol, Emergency, Protocol, Plan, Flooding, Shelter, Crisis, Vils, River",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW1.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW1.png"},
            {id:2, name:"Soil Conditions", group:"Headlines", runtime:60, size: 30, keywords:"Soil Conditions, Soil, Ground, Earth, Conditions, Testing, Foundations",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW2.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW2.png"},
            {id:3, name:"Riverbed Conditions", group:"Headlines", runtime:60, size: 30,keywords:"Riverbed Conditions, River, Flooding, Water, Depth, Vils,  Drainage",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW3.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW3.png"},
            {id:4, name:"Amberg Alliance for Families", group:"Actors - Citizenship", runtime:60, size: 30, keywords:"Amberg Alliance for Families",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW4.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW4.png"},
            {id:5, name:"Climate Protection Office", group:"Actors - City Administration", runtime:60, size: 30, keywords:"Climate Protection Office",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW5.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW5.png"},
            {id:6, name:"City Planning Office", group:"Actors - City Administration", runtime:60, size: 30, keywords:"City Planning Office",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW6.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW6.png"},
            {id:7, name:"Crossections of the riverbed", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW7.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW7.png"},
            {id:8, name:"Population Count Amberg", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW8.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:9, name:"Locations of Shelters", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW9.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:10, name:"Riverbed Stratigraphy", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW10.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW10.png"},
            {id:11, name:"Chemical Analysis", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW11.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW11.png"},
            {id:12, name:"Deformations", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW12.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW12.png"},
            {id:13, name:"Drainage Channels", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW13.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW13.png"},
            {id:14, name:"Emergency Energy Plan", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW14.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW14.png"},
            {id:15, name:"Evacuation Plan", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW15.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW15.png"},
            {id:16, name:"Riverbed: Gradient and Bed Material", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW16.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackW16.png"},
            {id:17, name:"Satellite Images", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW17.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:18, name:"Aerial Images", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW18.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:19, name:"Canal Cadastre", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW19.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:20, name:"Street Cadastre", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW20.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:21, name:"Survey About Floodings Impact on Personal Life", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW21.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:22, name:"Sensor Maintnance Data", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW22.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:23, name:"Flooded Areas", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW23.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:24, name:"Water Quality", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW24.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:25, name:"Rainfall Levels", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW25.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:26, name:"River Discharge", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW26.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:27, name:"Water Level Gauge", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW27.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:28, name:"Flood Protection Wall", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW28.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:29, name:"Ecluse", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW29.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:30, name:"Floodgates", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW30.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:31, name:"Injuries and Casualties", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW31.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:32, name:"Past Flood Damages", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW32.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:33, name:"Cost of Flood Prevention", group:"Data", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW33.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWD.png"},
            {id:34, name:"Citizen Surveys", group:"Headlines", runtime:60, size: 30, keywords:"Citizen Surveys, Municipality, Participation, Education, Communication, Issues",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW34.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB34.png"},
            {id:35, name:"Mapping - Hazard and Inundation", group:"Headlines", runtime:60, size: 30, keywords:"Mapping - Hazard and Inundation, Vils, River, Evacuation, Citizens, Municipality, Evacuation",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW35.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB35.png"},
            {id:36, name:"Architecture Competition on Flood Wall", group:"Headlines", runtime:60, size: 30, keywords:"Architecture Competition on Flood Wall, Old City, River, Vils, Water, Propositions, Entries",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW36.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB36.png"},
            {id:37, name:"City Maps", group:"Headlines", runtime:60, size: 30, keywords:"City Maps, Aerial, Satellite, Municipality, Old City, Streets, Cadastre, Buildings",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW37.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB37.png"},
            {id:38, name:"River Water", group:"Headlines", runtime:60, size: 30, keywords:"River Water, Vils, Amberg, Level, Depth, Flow",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW38.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB38.png"},
            {id:39, name:"Infrastructure Objects", group:"Headlines", runtime:60, size: 30, keywords:"Infrastructure Objects, Dam, Dyke, Ecluse, Floodwall, Flood Gates, Plan",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW39.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB39.png"},
            {id:40, name:"Flooding History", group:"Headlines", runtime:60, size: 30, keywords:"Flooding History, Archives, Old City, Water, River, Vils",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW40.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB40.png"},
            {id:41, name:"Socioeconomic Development", group:"Headlines", runtime:60, size: 30, keywords:"Socioeconomic Development, Old City, Section, Municipality, Commerce, Finance",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW41.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/Black/syncUpIMGFrontB41.png"},
            {id:42, name:"Education Program on Flood Protocols", group:"Headlines", runtime:60, size: 30, keywords:"Education Program on Flood Protocols, Crisis, Protocol, Shelter, Citizens, School, River, Vils, Plan, Evacuation, Damage",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW42.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:43, name:"Citizens", group:"Actors - Citizenship", runtime:60, size: 30, keywords:"Citizens",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW43.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:44, name:"TUM", group:"Actors - Educational Institutions", runtime:60, size: 30, keywords:"TUM, Technical University of Munich, Technische Universität München",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW44.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:45, name:"Schools", group:"Actors - Educational Institutions", runtime:60, size: 30, keywords:"Schools",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW45.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:46, name:"Hochschule Amberg", group:"Actors - Educational Institutions", runtime:60, size: 30, keywords:"Hochschule Amberg, Technical University of Amberg",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW46.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:47, name:"State of Bavaria", group:"Actors - State", runtime:60, size: 30, keywords:"State of Bavaria",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW47.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:48, name:"Civil Participation Office", group:"Actors - City Administration", runtime:60, size: 30, keywords:"Civil Participation Office",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW48.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:49, name:"City Council", group:"Actors - City Administration", runtime:60, size: 30, keywords:"City Council",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW49.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:50, name:"Office of Social Affairs", group:"Actors - City Administration", runtime:60, size: 30, keywords:"Office of Social Affairs",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW50.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:51, name:"City Archive", group:"Actors - City Administration", runtime:60, size: 30, keywords:"City Archive",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW51.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:52, name:"Civil Engineering Office", group:"Actors - City Administration", runtime:60, size: 30, keywords:"Civil Engineering Office",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW52.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:53, name:"Budget + Tax Office", group:"Actors - City Administration", runtime:60, size: 30, keywords:"Budget + Tax Office",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW53.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:54, name:"SentinelHUB", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"SentinelHUB",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW54.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:55, name:"Bayern Atlas", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"Bayern Atlas",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW55.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:56, name:"Bayernwerke", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"Bayernwerke",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW56.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:57, name:"Water Management Office in Weiden", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"Water Management Office in Weiden",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW57.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:58, name:"Auerheimer Engineering Bureau", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"Auerheimer Engineering Bureau",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW58.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:59, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30, keywords:"Stadtwerke-Amberg",
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW59.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWA.png"},
            {id:60, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:61, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:62, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:63, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:64, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:65, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:66, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:67, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:68, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:69, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:70, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:71, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:72, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:73, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:74, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:75, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:76, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:77, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:78, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:79, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"},
            {id:80, name:"Stadtwerke-Amberg", group:"Actors - Corporate Relations", runtime:60, size: 30,
                front:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20front/White/syncUpIMGFrontW60.png",
                back:"https://raw.githubusercontent.com/CarlaSauvant/ShareAmberg_CriticalModelling/main/cards/images%20back/White/syncUpIMGBackWG.png"}
        ],
        links: [
            {source: 1, target:4, gradient:3},
            {source: 42, target:4, gradient:3},
            {source: 2, target:5, gradient:3},
            {source: 3, target:5, gradient:3},
            {source: 35, target:5, gradient:3},
            {source: 36, target:5, gradient:3},
            {source: 38, target:5, gradient:3},
            {source: 2, target:6, gradient:3},
            {source: 3, target:6, gradient:3},
            {source: 35, target:6, gradient:3},
            {source: 36, target:6, gradient:3},
            {source: 37, target:6, gradient:3},
            {source: 38, target:6, gradient:3},
            {source: 3, target:7, gradient:1},
            {source: 37, target:7, gradient:1},
            {source: 1, target:8, gradient:1},
            {source: 1, target:9, gradient:1},
            {source: 2, target:10, gradient:1},
            {source: 2, target:11, gradient:1},
            {source: 2, target:12, gradient:1},
            {source: 3, target:12, gradient:1},
            {source: 3, target:13, gradient:1},
            {source: 1, target:14, gradient:1},
            {source: 1, target:15, gradient:1},
            {source: 3, target:16, gradient:1},
            {source: 37, target:17, gradient:1},
            {source: 37, target:18, gradient:1},
            {source: 37, target:19, gradient:1},
            {source: 37, target:20, gradient:1},
            {source: 34, target:21, gradient:1},
            {source: 37, target:23, gradient:1},
            {source: 40, target:23, gradient:1},
            {source: 38, target:24, gradient:1},
            {source: 38, target:25, gradient:1},
            {source: 38, target:26, gradient:1},
            {source: 38, target:27, gradient:1},
            {source: 39, target:27, gradient:1},
            {source: 36, target:28, gradient:1},
            {source: 39, target:28, gradient:1},
            {source: 39, target:29, gradient:1},
            {source: 39, target:30, gradient:1},
            {source: 40, target:31, gradient:1},
            {source: 40, target:32, gradient:1},
            {source: 41, target:32, gradient:1},
            {source: 39, target:33, gradient:1},
            {source: 41, target:33, gradient:1},
            {source: 3, target:38, gradient:2},
            {source: 1, target:42, gradient:3},
            {source: 34, target:43, gradient:3},
            {source: 36, target:43, gradient:3},
            {source: 42, target:44, gradient:3},
            {source: 42, target:45, gradient:3},
            {source: 36, target:46, gradient:3},
            {source: 41, target:47, gradient:3},
            {source: 34, target:48, gradient:3},
            {source: 36, target:48, gradient:3},
            {source: 36, target:49, gradient:3},
            {source: 42, target:50, gradient:3},
            {source: 40, target:51, gradient:3},
            {source: 41, target:51, gradient:3},
            {source: 39, target:52, gradient:3},
            {source: 41, target:52, gradient:3},
            {source: 41, target:53, gradient:3},
            {source: 37, target:54, gradient:3},
            {source: 37, target:55, gradient:3},
            {source: 1, target:56, gradient:3},
            {source: 3, target:57, gradient:3},
            {source: 35, target:57, gradient:3},
            {source: 38, target:57, gradient:3},
            {source: 39, target:57, gradient:3},
            {source: 40, target:57, gradient:3},
            {source: 38, target:58, gradient:3},
            {source: 38, target:59, gradient:3},
            {source: 39, target:60, gradient:4},
            {source: 37, target:61, gradient:4},
            {source: 2, target:62, gradient:4},
            {source: 39, target:60, gradient:4},
            {source: 43, target:63, gradient:5},
            {source: 43, target:64, gradient:5},
            {source: 34, target:65, gradient:4},
            {source: 6, target:66, gradient:5},
            {source: 48, target:70, gradient:5},
            {source: 50, target:70, gradient:5},
            {source: 48, target:70, gradient:5},
            {source: 53, target:67, gradient:5},
            {source: 53, target:68, gradient:5},
            {source: 46, target:69, gradient:5},
            {source: 47, target:71, gradient:5},
            {source: 40, target:72, gradient:4},
            {source: 40, target:73, gradient:4},
            {source: 50, target:73, gradient:5},
            {source: 4, target:74, gradient:5},
            {source: 43, target:74, gradient:5},
            {source: 36, target:75, gradient:4},
            {source: 51, target:75, gradient:5},
            {source: 36, target:76, gradient:4},
            {source: 51, target:76, gradient:5},
            {source: 1, target:77, gradient:4},
            {source: 47, target:77, gradient:5},
            {source: 58, target:78, gradient:5},
            {source: 4, target:79, gradient:5},
            {source: 46, target:80, gradient:5}
        ]
    };


// HERE WE CAN CHANGE THE STYLE OF THE LINKS
    const gradient = [
        {id: "gradient1", color1: "#ad479f", Color2: "#ff303c"}, // Headline --> Data
        {id: "gradient2", color1: "#ad479f", Color2: "#ab2599"}, // Headline --> Headline
        {id: "gradient3", color1: "#ad479f", Color2: "#316ad9"}, // Headline --> Actor
        {id: "gradient4", color1: "#ad479f", Color2: "#ffffff"}, // Headline --> White (not done)
        {id: "gradient5", color1: "#316ad9", Color2: "#ffffff"} // Actor --> White (not done)
    ];

// Define the gradients
    const defs = svg.append("defs");
    gradient.forEach(gradient => {
        const linearGradient = defs.append("linearGradient")
            .attr("id", gradient.id)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");

        linearGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", gradient.color1);

        linearGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", gradient.Color2);
    });

// Apply the gradients to the links
    const link = svg.selectAll(".links") //Selects all elements with class "links" under the svg element, creates an empty selection if none exists.
        .data(dataset.links) // Binds the elements of the dataset.links array to the selection.
        .enter()
        .append("line") //For each data item not bound to an existing element, appends a new line element.
        .attr("class", "links") //Sets the class of the line elements to "links".
        .attr("stroke", (d, i) => `url(#gradient${d.gradient % 5 })`) // Apply the gradient to the stroke of the line elements.
        .attr("stroke-width", "4px") //Sets the stroke width of the line elements to 2 pixels.
        .style("opacity", 1) //Sets the opacity of the line elements to 0.85.
        .attr("id",d=> "line"+d.source+d.target) // Sets the ID of the line elements to "line" followed by the source and target properties of the corresponding data item.
        .attr("class", "links"); //Sets the class of the line elements to "links".



const edgepaths = svg.selectAll(".edgepath") //make path go along with the link provide position for link labels
        .data(dataset.links)
        .enter()
        .append('path')
        .attr('class', 'edgepath')
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .attr('id', function (d, i) {return 'edgepath' + i})
        .style("pointer-events", "none");

const Edge_Labels = svg.selectAll(".edgelabel")
        .data(dataset.links)
        .enter()
        .append('text')
        .style("pointer-events", "none")
        .attr('class', 'edgelabel')
        .attr('id', function (d, i) {return 'edgelabel' + i})
        .attr('font-size', 5)
        .attr('fill', '#aaa');


  
// Initialize the nodes
    const node = svg.selectAll(".nodes")
        .attr("class", "nodes")
        .data(dataset.nodes)
        .enter()
        .append("g")
        .attr("class", function(d) { return "group_" + d.group; })
        .append("image")
        .attr("xlink:href", function(d) { return d.front; })
        .attr("width", function(d) { return d.size + 2; })
        .attr("height", function(d) { return d.size + 2; })
        .attr("x", function(d) { return -d.size/2; })
        .attr("y", function(d) { return -d.size/2; })
        .on("mouseover", function(d) {
            d3.select(this)
                .transition()
                .duration(350)
                .attr("width", 200)
                .attr("height", 200)
                .attr("x", function(d) { return -100; })
                .attr("y", function(d) { return -100; })
        })
        .on("mouseout", function(d) {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("width", function(d) { return d.size; })
                .attr("height", function(d) { return d.size; })
                .attr("x", function(d) { return -d.size/2; })
                .attr("y", function(d) { return -d.size/2; })
        })
        .on("click", function(d) {
            d3.select(this.parentNode)
                .classed("highlight", !d3.select(this.parentNode).classed("highlight"))
                .style("z-index", 50)
                .select("image")
                .transition()
                .duration(350)
                .style("opacity", 0.3)
                .on("end", function() {
                    if (d3.select(this).attr("xlink:href") === d.front) {
                        d3.select(this)
                            .attr("xlink:href", d.back)
                            .transition()
                            .duration(350)
                            .style("opacity", 1);
                    } else {
                        d3.select(this)
                            .attr("xlink:href", d.front)
                            .transition()
                            .duration(350)
                            .style("opacity", 1);
                    }
                });
        });


    function zoom_actions(){
        svg.transition()
            .duration(350)
            .attr("transform", d3.event.transform);
    }

    var zoom_handler = d3.zoom()
        .on("zoom", zoom_actions);
    zoom_handler(svg);


node.call(d3.drag() //sets the event listener for the specified typenames and returns the drag behavior.
        .on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
        .on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
    );

  //The code (below) implements a click event handler for the circle elements of the nodes
    // in a D3.js network graph.
    // When a node is clicked, the stroke-opacity and stroke of the node,
    // as well as its neighboring nodes (based on the "neighborSource" and
    // "neighborTarget" dictionaries), are updated with new values (e.g. stroke color,
    // opacity). The function also updates the "active" attribute of the node to reflect
    // its current state (active or inactive).

 node.selectAll("nodes").on("click",function(d){

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



  //drawing the second legend
  const legend_g2 = svg.append("g")
  .attr("transform", `translate(${width}, 120)`);
    return div
}

//This script (below) exports a default function "define" which defines the main module.
// The function uses the runtime and observer as input arguments.
// The function uses the observer() function to define variables such as main, d3,
// margin, width, height, colorScale, and simulation. The function also defines the
// myChart variable, which is a result of calling a function "myChart" that takes
// variables such as html, d3, width, margin, height, colorScale and simulation as input.
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
