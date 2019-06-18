import mapboxgl from 'mapbox-gl';
import mapboxDraw from '@mapbox/mapbox-gl-draw';

const { MAPBOX_API_KEY } = process.env;

function update(e) {
    var data = draw.getAll();

    console.log(data.features);
    if (data.features.length > 0) {
        data.features.forEach(console.log);
    }
}

mapboxgl.accessToken = MAPBOX_API_KEY;

const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-v9', //hosted style id
    center: [-117.670586, 33.557321],
    zoom: 18
});


const draw = new mapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
});
map.addControl(draw);

map.on('draw.create', update);
map.on('draw.delete', update);
map.on('draw.update', update);
