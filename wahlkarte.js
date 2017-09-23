
/**
 * Globale Felder
 */
var infoPanelDistrictName = document.getElementById('info-panel-district-name'),
    infoPanel = document.getElementById('info-panel');

/**
 * Globale Variabeln
 */
var lastSelectetDistrictName = '',
    lastSelectetDistrictId = null;

/**
 * Wird aufgerufen wenn der User auf eine Region klickt
 * @param featureData das aktuelle "feature"
 */
function selectDistrict(featureData) {

    var props = featureData.properties;
    // In das HTML schreiben
    infoPanelDistrictName.innerHTML = "Stadtteil: " + lastSelectetDistrictName;

    infoPanel.classList.add('isOpen');
} // end function

/**
 * Schließt das Infopanel
 */
function closeInfoPanel() {
    infoPanel.classList.remove('isOpen');
}


var KA_LAT = 49.00921;
var KA_LNG = 8.403951;
var GEOJSON = null;

var TILES_URL = 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';

var map = new L.Map("map", { center: [KA_LAT, KA_LNG], zoom: 12 })
    .addLayer(new L.TileLayer(TILES_URL));

var svg = d3.select(map.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide");

// SVG ID
svg.attr("id", "karte")

var stadtteile = g.append('g')
    .classed('stadtteile', true);

var wahlbezirke = g.append('g')
    .classed('wahlbezirke', true);


/**
 * Adapter to use Leaflet's projection in D3.
 */
function projectPoint(x, y) {
    var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
}
var transform = d3.geo.transform({ point: projectPoint }),
    path = d3.geo.path().projection(transform);


/**
 * Create SVG paths from a GeoJSON file.
 */
function pathsFromGeoJSON(filename, group, setGeoJson, callback) {

    d3.json(filename, function (error, collection) {
        if (error) return callback(error, null);

        if (GEOJSON === null && setGeoJson){
            GEOJSON = collection
        }
        var feature = group.selectAll("path")
            .data(collection.features)
            .enter().append("path");

        map.on("viewreset", reset);
        reset();

        return callback(null, feature);

        // Reposition the SVG to cover the features.
        function reset() {
            var bounds = path.bounds(collection);
            var topLeft = bounds[0];
            var bottomRight = bounds[1];

            svg.attr("width", bottomRight[0] - topLeft[0])
                .attr("height", bottomRight[1] - topLeft[1])
                .style("left", topLeft[0] + "px")
                .style("top", topLeft[1] + "px");

            group.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

            feature.attr("d", path);
        }
    });
}

pathsFromGeoJSON("ka_stadtteile.geojson", stadtteile,false, function (error, paths) {
    paths
        .attr('class', 'district')
        .style('fill', 'rgba(255, 255, 255, 0.7)')
        .style('stroke', '#000')
        .style('stroke-width', 2);
});

pathsFromGeoJSON("statistiken-wahlbezirke.geojson", wahlbezirke, true, function (error, paths) {
    paths
        .attr("id", function (d) { return d.properties.Wahlbezirksnummer })
        .attr('class', 'wahlbezirk')
        .on('mousemove', onMouseOverWahlbezirk)
        .on('mouseleave', onMouseLeaveWahlbezirk)
        .style('fill', '#fff')
        .style('stroke', '#000')
        .style('stroke-width', 1)
        .on('click', selectDistrict);
});

function color() {
    var elemSvg = document.getElementById("karte")
    if (GEOJSON !== null){
        for(var item of GEOJSON.features){
            elemSvg.getElementById(item.properties.Wahlbezirksnummer).style.fill = "yellow"
        }
    } else {
        console.error("GEOJSON null!")
    }
}