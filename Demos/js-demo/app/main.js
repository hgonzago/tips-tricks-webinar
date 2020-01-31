require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/Layer",
  "esri/widgets/Search",
  "esri/widgets/Search/LayerSearchSource",
  "dojo/domReady!"
], function (
  Map,
  MapView,
  LayerSearchSource,
  Search,
  Layer
) {

  const map = new Map({
    basemap: "dark-gray-vector"
  });

  const view = new MapView({
    map: map,
    zoom: 2,
    container: "viewDiv"
  });

  // Module order: The Layer and LayerSearchSource modules 
  // are flipped so this one will break 
  Layer.fromPortalItem({
    id: "6a57bf90b8cd46b7a5da9a3801f32163"
  }).then(function (layer) {

    map.add(layer);
    // TYPO: Mispell the class namefor layerSearchSource 
    // NETWORK: display field points to field with no info
    // inspect the network request to figure this out and 
    // find a better option
    const searchSource = new LayreSearchSource({
      layer: layer,
      displayField: "Descript",
      searchFields: ["Desc1", "Desc2", "Desc3", "Desc4"],
      name: "Nautical Piracy",
      placeholder: "Search incident details",
      withinViewEnabled: true
    });

    // CSS: we'll change the color of the search placeholder 
    // text so it 'pops'
    // CONSOLE: when run over http not on localhost 
    // you'll see a console message about geolocation 
    // requiring https
    const search = new Search({
      view: view,
      sources: [searchSource],
      includeDefaultSources: false
    });

    view.ui.add(search, "top-right");

  });
});
