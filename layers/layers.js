var wms_layers = [];


        var lyr_googlesateltehybrid_0 = new ol.layer.Tile({
            'title': 'google satelte hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_finalnew_kasama_1 = new ol.format.GeoJSON();
var features_finalnew_kasama_1 = format_finalnew_kasama_1.readFeatures(json_finalnew_kasama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_finalnew_kasama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_finalnew_kasama_1.addFeatures(features_finalnew_kasama_1);
var lyr_finalnew_kasama_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_finalnew_kasama_1, 
                style: style_finalnew_kasama_1,
                popuplayertitle: 'final  — new_kasama',
                interactive: true,
                title: 'final  — new_kasama'
            });
var format_New_Kasama_2 = new ol.format.GeoJSON();
var features_New_Kasama_2 = format_New_Kasama_2.readFeatures(json_New_Kasama_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_New_Kasama_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama_2.addFeatures(features_New_Kasama_2);
var lyr_New_Kasama_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama_2, 
                style: style_New_Kasama_2,
                popuplayertitle: 'New_Kasama',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama_2.png" /> New_Kasama'
            });

lyr_googlesateltehybrid_0.setVisible(true);lyr_finalnew_kasama_1.setVisible(true);lyr_New_Kasama_2.setVisible(true);
var layersList = [lyr_googlesateltehybrid_0,lyr_finalnew_kasama_1,lyr_New_Kasama_2];
lyr_finalnew_kasama_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_New_Kasama_2.set('fieldAliases', {});
lyr_finalnew_kasama_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_New_Kasama_2.set('fieldImages', {});
lyr_finalnew_kasama_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_New_Kasama_2.set('fieldLabels', {});
lyr_New_Kasama_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});