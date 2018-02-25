import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from "topojson-client";

import JapanJson from '../../Json/MapView/japan.json';

import '../../Styles/MapView/App.css';


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    drawJapanMap();
    // drawAmericaMap();
  }

  render() {

    return(
      <div>
        <div className="mapAll">
          <div className="japan">
          </div>
          <div className="america">
          </div>
        </div>
        <h1>旅行Map</h1>
      </div>
    );
  }
}

function drawJapanMap() {
  var w = 1300;
  var h = 960;
  //japanclass下にsvg要素の作成
  var svg = d3.select(".japan").append("svg").attr("width", w).attr("height", h);
  //投影方法？
  var projection = d3.geo.mercator().center([136, 35.5]).scale(2000).translate([w / 2, h / 2]);
  var path = d3.geo.path().projection(projection);
  var topo = topojson.feature(JapanJson, JapanJson.objects.pref).features;
  console.log(topo);
  svg.selectAll(".japan").data(topo).enter().append("path").attr("class", function(d) {
    return  d.properties.name_local;
  }).attr("d", path);;
}

function drawAmericaMap() {
  var w = 1300;
  var h = 960;
  var JsonURL = "https://d3js.org/us-10m.v1.json";
  var svg = d3.select(".america").append("svg").attr("width", w).attr("height", h);;
  var path = d3.geo.path();

  d3.json(JsonURL, function (err, us) {
    var topo = topojson.feature(us, us.objects.states).features;

    svg.select(".america").data(topo).enter().append("path").attr("d", path);
    // svg.append("path").attr("class", "state-borders").attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
  });


  // var path = d3.geo.path()
  // d3.json(JsonURL, function (err, us) {
  //   var topo = topojson.feature(us, us.objects.states).features;
  //   svg.selectAll(".japan").data(topo).enter().append("path").attr("d", path);
  //
  // });
}

export default App;
