// A dendrogram is a node-link diagram that places leaf nodes of the tree at
// the same depth.

// Dendrogram generation

// Select svg tag
var svg = d3.select("svg"),
    // Get width
    width = svg.attr("width"),
    // Get height
    height = svg.attr("height"),
    // Append into the DOM
    g = svg.append("g").attr("transform", "translate(0,0)");

var tree = d3.cluster()
    .size([height, width]);

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

// By default, for security reasons Google Chrome does not load local files.
// In order to use local files, you need to start a simple server (e.g.
// http-server) on your computer.
// Also be sure to enable CORS to have access to the file.
d3.csv("https://raw.githubusercontent.com/PictureElement/resume-template-html5/master/serve/skills.csv", function(error, data) {
  if (error) throw error;

  var root = stratify(data)
      .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });

  var link = g.selectAll(".link")
    .data(tree(root).links())
    .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal()
          .x(function(d) { return d.y; })
          .y(function(d) { return d.x; }));

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("circle")
      .attr("r", 2.5);
  
  node.append("text")
      .attr("dy", 3)
      .attr("x", function(d) { return d.children ? -8 : 8; })
      .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
      .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
});