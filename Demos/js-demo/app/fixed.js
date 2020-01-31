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
  Layer,
  Search,
  LayerSearchSource
) {

  const map = new Map({
    basemap: "dark-gray-vector"
  });

  const view = new MapView({
    map: map,
    zoom: 2,
    container: "viewDiv"
  });


  Layer.fromPortalItem({
    id: "6a57bf90b8cd46b7a5da9a3801f32163"
  }).then(function (layer) {

    map.add(layer);

    const searchSource = new LayerSearchSource({
      layer: layer,
      displayField: "Desc1",
      searchFields: ["Desc1", "Desc2", "Desc3", "Desc4"],
      name: "Nautical Piracy",
      placeholder: "Search incident details",
      withinViewEnabled: true
    });

    const search = new Search({
      view: view,
      sources: [searchSource],
      includeDefaultSources: false
    });
    view.ui.add(search, "top-right");

  });
});
