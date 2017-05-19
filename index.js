mapboxgl.accessToken = 'pk.eyJ1IjoiZHRob21hczk0IiwiYSI6ImNqMjZqYnluODAwcHczM3NjaGJrcDViNXoifQ.eIC7zV-Lu3smSrq6LI1A1g';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-84.5088, 39.1435],
    hash: true,
    maxBounds: [[-84.5120, 39.1407], [-84.5052, 39.1478]],
    minZoom: 14,
    zoom: 15.15
});

map.touchZoomRotate.disableRotation();

map.on('load', function () {
    map.addControl(new mapboxgl.NavigationControl());

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "name": "Cincinnati Zoo",
                            "description": "<strong class='icon account'>Cincinnati Zoo</strong><p>70 acres includes children's zoo. General information, animal photos and descriptions, and virtual exhibits.<a href=\"http://cincinnatizoo.org\" target=\"_blank\" title=\"Cincinnati Zoo\">More information</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50805775438864, 39.144437121283545]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Elephant Reserve",
                            "description": "<strong>Elephant Reserve</strong><p>The future of biodiversity, including the Asian elephant, depends on the value we place on wildlife and wild places. It matters not how to save biodiversity if... <a href=\"http://cincinnatizoo.org/marge-schott-unnewehr-elephant-reserve/\" target=\"_blank\" title=\"Elephant Reserve\">read more</a></p>",
                            "icon": "theatre"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50763284428206, 39.14322463365869]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gorilla World",
                            "description": "<strong>Gorilla World</strong><p>Built in 1978, Gorilla World was one of the first large naturalistic primate exhibits in the world. Upon entering the outdoor exhibit space, the visitor is immersed in ...</p> <a href=\"http://cincinnatizoo.org/gorilla-world/\" target=\"_blank\" title=\"Gorilla World\">read more</a></p>",
                            "icon": "bar"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.5100172138772, 39.14459311257775]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wolf Woods",
                            "description": "<strong>Wolf Woods</strong><p>Hike through the woods where Mexican wolves and river otters play. Wolf Woods, which opened in 2005, highlights conservation efforts that are restoring North...<a href=\"http://cincinnatizoo.org/wolf-woods/\" target=\"_blank\" title=\"Wolf Woods\">read more</a></p>",
                            "icon": "art-gallery"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50778562908097, 39.14539061690513]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "World of the Insect",
                            "description": "<strong>World of the Insect</strong><p>In 1978, the first exhibit building devoted to insects in any U.S. zoo was built at the Cincinnati Zoo & Botanical Garden and was awarded the American Zoo and... <a href=\"http://cincinnatizoo.org/plan-your-visit/exhibits/world-of-the-insect/\" target=\"_blank\" title=\"World of the Insect\">read more</a></p>",
                            "icon": "bicycle"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.51041698870036, 39.14546639638681]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Reptile House",
                            "description": "<strong>Reptile House</strong><p>Once people learn more about reptiles and realize that most are harmless and even beneficial, their fears subside. Visitors to the Reptile House are introduced...<a href=\"http://http://cincinnatizoo.org/reptile-house/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "star"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50912586580024, 39.144208241256024]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Spaulding Children's Zoo",
                            "description": "<strong>Spaulding Children's Zoo</strong><p>The Children's Zoo is the perfect place for families to relax, interact with animals and have lots of fun! The exhibit features a petting yard, animal nursery,... <a href=\"http://cincinnatizoo.org/plan-your-visit/exhibits/spaulding-childrens-zoo/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50767047897355, 39.14512005360356]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Africa",
                            "description": "<strong>Africa</strong><p>This newest exhibit in Africa is designed to bring visitors #CloseEnoughToCare by inspiring them with wildlife! There is an underwater viewing area and an... <a href=\"http://cincinnatizoo.org/plan-your-visit/exhibits/africa/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50652221058607, 39.14446916640449]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lorikeet Landing",
                            "description": "<strong>Lorikeet Landing</strong></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50686301417365, 39.14495095749274]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Sumatran Rhino",
                            "description": "<strong>Sumatran Rhino</strong><p>There are less than 100 remaining Sumatran rhinos, and the only one that was in North America, Harapan, was on exhibit in Wildlife Canyon until he journeyed...<a href=\"http://cincinnatizoo.org/wildlife-canyon-sumatran-rhino/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.5096429268722, 39.14382776599035]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Siegfried & Roy's White Lions",
                            "description": "<strong>Siegfried & Roy's White Lions</strong></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.5085553984468, 39.14649964858617]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Wings of the World",
                            "description": "<strong>Wings of the World</strong><p>Originally a reptile house built in 1936, Wings of the World was renovated in 1996 to house and display a variety of birds from songbirds to puffins. <a href=\"http://cincinnatizoo.org/wings-of-the-world/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50658799201476, 39.14528217177326]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Lemur Lookout",
                            "description": "<strong>Lemur Lookout</strong><p>Ring-tailed lemurs live in social troops of a dozen or so, led by a single, dominant female. Lemurs have pungent scent glands they use for<a href=\"http://cincinnatizoo.org/exhibit/lemur-lookout/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.51001357774221, 39.145949354817816]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Passenger Pigeon Memorial",
                            "description": "<strong>Passenger Pigeon Memorial</strong><p>The exhibit pays tribute to Martha, the last known passenger pigeon who died at the Zoo in 1914. Once the most numerous bird on Earth, the passenger pigeon<a href=\"http://cincinnatizoo.org/plan-your-visit/exhibits/passenger-pigeon-memorial/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.51038447001054, 39.145128620558665]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Monkey Island",
                            "description": "<strong>Monkey Island</strong><p><a href=\"http://http://cincinnatizoo.org/monkey-island/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50910781454724, 39.144448855687045]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Gibbon Islands",
                            "description": "<strong>Gibbon Islands</strong><p>Gibbons are famous for their loud musical calls, which can carry over long distances to communicate through the dense foliage. Visitors to Gibbon Islands have<a href=\"http://cincinnatizoo.org/gibbon-islands/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50791556581176, 39.1446208375248]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Giraffe Ridge",
                            "description": "<strong>Giraffe Ridge</strong><p><em>Eye Level</em> – with the world's tallest animals! This 27,000 square-foot exhibit, complete with an elevated viewing platform, provides an amazing interactive<a href=\"http://cincinnatizoo.org/giraffe-ridge/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50665755359323, 39.14333339542165]
                        }
                    }, {
                        "type": "Feature",
                        "properties": {
                            "name": "Swan Lake",
                            "description": "<strong>Swan Lake</strong><p>Wetland Trails and Swan Lake provide visitors with the opportunity to observe many native species such as turtles and waterfowl while learning about the...<a href=\"http://cincinnatizoo.org/wetland-trails-swan-lake/\" target=\"_blank\" title=\"read more\">read more</a></p>",
                            "icon": "music"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-84.50795639801203, 39.1441269890139]
                        }
                    }
                ]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": false
        }
    });

    // Add a layer with 3D buildings
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
                'type': 'identity',
                'property': 'height'
            },
            'fill-extrusion-base': {
                'type': 'identity',
                'property': 'min_height'
            },
            'fill-extrusion-opacity': .6
        }
    });

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    map.on('click', 'places', function (e) {
        map.flyTo({center: e.features[0].geometry.coordinates});
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    map.on('click', function (e) {
        // e.lngLat is the longitude, latitude geographical position of the event
        console.log(JSON.stringify(e.lngLat));
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});
