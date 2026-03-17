var wms_layers = [];

var lyr_bd_alti_stlo_agglo_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'bd_alti_stlo_agglo<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_0.png" /> 0,0000<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_1.png" /> 2,5000<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_2.png" /> 5,0000<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_3.png" /> 10,0000<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_4.png" /> 20,0000<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_5.png" /> 38,5762<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_6.png" /> 75,9225<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_7.png" /> 113,2687<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_8.png" /> 150,6150<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_9.png" /> 187,9612<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_10.png" /> 226,0257<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_11.png" /> 262,6538<br />\
    <img src="styles/legend/bd_alti_stlo_agglo_0_12.png" /> 300,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/bd_alti_stlo_agglo_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-151338.828395, 6254941.825246, -94756.852397, 6321813.052579]
        })
    });
var lyr_ombrage45_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ombrage45<br />\
    <img src="styles/legend/ombrage45_1_0.png" /> 41<br />\
    <img src="styles/legend/ombrage45_1_1.png" /> 233<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ombrage45_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-151338.828395, 6254941.825246, -94756.852397, 6321813.052579]
        })
    });
var lyr_ombrage135_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ombrage135<br />\
    <img src="styles/legend/ombrage135_2_0.png" /> 41<br />\
    <img src="styles/legend/ombrage135_2_1.png" /> 233<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ombrage135_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-151338.828395, 6254941.825246, -94756.852397, 6321813.052579]
        })
    });
var lyr_ombrage225_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ombrage225<br />\
    <img src="styles/legend/ombrage225_3_0.png" /> 41<br />\
    <img src="styles/legend/ombrage225_3_1.png" /> 233<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ombrage225_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-151338.828395, 6254941.825246, -94756.852397, 6321813.052579]
        })
    });
var lyr_ombrage_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ombrage<br />\
    <img src="styles/legend/ombrage_4_0.png" /> 30<br />\
    <img src="styles/legend/ombrage_4_1.png" /> 245<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ombrage_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-151338.828395, 6254941.825246, -94756.852397, 6321813.052579]
        })
    });
var format_courbes5m_5 = new ol.format.GeoJSON();
var features_courbes5m_5 = format_courbes5m_5.readFeatures(json_courbes5m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_courbes5m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_courbes5m_5.addFeatures(features_courbes5m_5);
var lyr_courbes5m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_courbes5m_5,
maxResolution:42.00669922839295,
 
                style: style_courbes5m_5,
                popuplayertitle: 'courbes - 5 m',
                interactive: true,
                title: '<img src="styles/legend/courbes5m_5.png" /> courbes - 5 m'
            });
var format_courbes25m_6 = new ol.format.GeoJSON();
var features_courbes25m_6 = format_courbes25m_6.readFeatures(json_courbes25m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_courbes25m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_courbes25m_6.addFeatures(features_courbes25m_6);
var lyr_courbes25m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_courbes25m_6,
maxResolution:15.402456383744077,
 
                style: style_courbes25m_6,
                popuplayertitle: 'courbes - 25 m',
                interactive: true,
                title: '<img src="styles/legend/courbes25m_6.png" /> courbes - 25 m'
            });
var format_saintloagglo_tourisme_sla_randonnees_7 = new ol.format.GeoJSON();
var features_saintloagglo_tourisme_sla_randonnees_7 = format_saintloagglo_tourisme_sla_randonnees_7.readFeatures(json_saintloagglo_tourisme_sla_randonnees_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saintloagglo_tourisme_sla_randonnees_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saintloagglo_tourisme_sla_randonnees_7.addFeatures(features_saintloagglo_tourisme_sla_randonnees_7);
var lyr_saintloagglo_tourisme_sla_randonnees_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saintloagglo_tourisme_sla_randonnees_7, 
                style: style_saintloagglo_tourisme_sla_randonnees_7,
                popuplayertitle: 'saintloagglo_tourisme_sla_randonnees',
                interactive: true,
                title: '<img src="styles/legend/saintloagglo_tourisme_sla_randonnees_7.png" /> saintloagglo_tourisme_sla_randonnees'
            });
var format_bt_prive_8 = new ol.format.GeoJSON();
var features_bt_prive_8 = format_bt_prive_8.readFeatures(json_bt_prive_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bt_prive_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_prive_8.addFeatures(features_bt_prive_8);
var lyr_bt_prive_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_prive_8, 
                style: style_bt_prive_8,
                popuplayertitle: 'bt_prive',
                interactive: true,
                title: '<img src="styles/legend/bt_prive_8.png" /> bt_prive'
            });
var format_bt_pub_9 = new ol.format.GeoJSON();
var features_bt_pub_9 = format_bt_pub_9.readFeatures(json_bt_pub_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bt_pub_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_pub_9.addFeatures(features_bt_pub_9);
var lyr_bt_pub_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_pub_9, 
                style: style_bt_pub_9,
                popuplayertitle: 'bt_pub',
                interactive: true,
                title: '<img src="styles/legend/bt_pub_9.png" /> bt_pub'
            });
var format_bt_rel_10 = new ol.format.GeoJSON();
var features_bt_rel_10 = format_bt_rel_10.readFeatures(json_bt_rel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bt_rel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_rel_10.addFeatures(features_bt_rel_10);
var lyr_bt_rel_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_rel_10, 
                style: style_bt_rel_10,
                popuplayertitle: 'bt_rel',
                interactive: true,
                title: '<img src="styles/legend/bt_rel_10.png" /> bt_rel'
            });
var format_bt_leger_11 = new ol.format.GeoJSON();
var features_bt_leger_11 = format_bt_leger_11.readFeatures(json_bt_leger_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bt_leger_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bt_leger_11.addFeatures(features_bt_leger_11);
var lyr_bt_leger_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bt_leger_11, 
                style: style_bt_leger_11,
                popuplayertitle: 'bt_leger',
                interactive: true,
                title: '<img src="styles/legend/bt_leger_11.png" /> bt_leger'
            });
var format_SaintLoAgglo_LimiteAdministrative_12 = new ol.format.GeoJSON();
var features_SaintLoAgglo_LimiteAdministrative_12 = format_SaintLoAgglo_LimiteAdministrative_12.readFeatures(json_SaintLoAgglo_LimiteAdministrative_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaintLoAgglo_LimiteAdministrative_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaintLoAgglo_LimiteAdministrative_12.addFeatures(features_SaintLoAgglo_LimiteAdministrative_12);
var lyr_SaintLoAgglo_LimiteAdministrative_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaintLoAgglo_LimiteAdministrative_12, 
                style: style_SaintLoAgglo_LimiteAdministrative_12,
                popuplayertitle: 'SaintLoAgglo_LimiteAdministrative',
                interactive: true,
                title: '<img src="styles/legend/SaintLoAgglo_LimiteAdministrative_12.png" /> SaintLoAgglo_LimiteAdministrative'
            });
var group_Ombrage = new ol.layer.Group({
                                layers: [lyr_ombrage45_1,lyr_ombrage135_2,lyr_ombrage225_3,lyr_ombrage_4,],
                                fold: 'open',
                                title: 'Ombrage'});

lyr_bd_alti_stlo_agglo_0.setVisible(true);lyr_ombrage45_1.setVisible(true);lyr_ombrage135_2.setVisible(true);lyr_ombrage225_3.setVisible(true);lyr_ombrage_4.setVisible(true);lyr_courbes5m_5.setVisible(true);lyr_courbes25m_6.setVisible(true);lyr_saintloagglo_tourisme_sla_randonnees_7.setVisible(true);lyr_bt_prive_8.setVisible(true);lyr_bt_pub_9.setVisible(true);lyr_bt_rel_10.setVisible(true);lyr_bt_leger_11.setVisible(true);lyr_SaintLoAgglo_LimiteAdministrative_12.setVisible(true);
var layersList = [lyr_bd_alti_stlo_agglo_0,group_Ombrage,lyr_courbes5m_5,lyr_courbes25m_6,lyr_saintloagglo_tourisme_sla_randonnees_7,lyr_bt_prive_8,lyr_bt_pub_9,lyr_bt_rel_10,lyr_bt_leger_11,lyr_SaintLoAgglo_LimiteAdministrative_12];
lyr_courbes5m_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_courbes25m_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_saintloagglo_tourisme_sla_randonnees_7.set('fieldAliases', {'nom': 'nom', 'type': 'type', 'distance': 'distance', 'temps': 'temps', 'difficulte': 'difficulte', 'categorie': 'categorie', 'depart': 'depart', 'denivele': 'denivele', 'gestionnai': 'gestionnai', 'lien': 'lien', });
lyr_bt_prive_8.set('fieldAliases', {'gc_key': 'gc_key', 'angle': 'angle', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', });
lyr_bt_pub_9.set('fieldAliases', {'gc_key': 'gc_key', 'angle': 'angle', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', 'affectat': 'affectat', });
lyr_bt_rel_10.set('fieldAliases', {'gc_key': 'gc_key', 'angle': 'angle', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', });
lyr_bt_leger_11.set('fieldAliases', {'gc_key': 'gc_key', 'angle': 'angle', 'nom': 'nom', 'planche': 'planche', 'lot_meta': 'lot_meta', });
lyr_SaintLoAgglo_LimiteAdministrative_12.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'code_siren': 'code_siren', 'nature': 'nature', 'nom': 'nom', 'date_creat': 'date_creat', 'date_maj': 'date_maj', 'date_app': 'date_app', 'date_conf': 'date_conf', 'id_aut_adm': 'id_aut_adm', 'Aire(ha)': 'Aire(ha)', 'aire(ha)2': 'aire(ha)2', });
lyr_courbes5m_5.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_courbes25m_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_saintloagglo_tourisme_sla_randonnees_7.set('fieldImages', {'nom': 'TextEdit', 'type': 'TextEdit', 'distance': 'TextEdit', 'temps': 'Range', 'difficulte': 'TextEdit', 'categorie': 'TextEdit', 'depart': 'TextEdit', 'denivele': 'Range', 'gestionnai': 'TextEdit', 'lien': 'TextEdit', });
lyr_bt_prive_8.set('fieldImages', {'gc_key': '', 'angle': '', 'nom': '', 'planche': '', 'lot_meta': '', });
lyr_bt_pub_9.set('fieldImages', {'gc_key': '', 'angle': '', 'nom': '', 'planche': '', 'lot_meta': '', 'affectat': '', });
lyr_bt_rel_10.set('fieldImages', {'gc_key': '', 'angle': '', 'nom': '', 'planche': '', 'lot_meta': '', });
lyr_bt_leger_11.set('fieldImages', {'gc_key': 'TextEdit', 'angle': 'TextEdit', 'nom': 'TextEdit', 'planche': 'TextEdit', 'lot_meta': 'Range', });
lyr_SaintLoAgglo_LimiteAdministrative_12.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'code_siren': 'TextEdit', 'nature': 'TextEdit', 'nom': 'TextEdit', 'date_creat': 'TextEdit', 'date_maj': 'TextEdit', 'date_app': 'DateTime', 'date_conf': 'DateTime', 'id_aut_adm': 'TextEdit', 'Aire(ha)': 'TextEdit', 'aire(ha)2': 'TextEdit', });
lyr_courbes5m_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_courbes25m_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_saintloagglo_tourisme_sla_randonnees_7.set('fieldLabels', {'nom': 'no label', 'type': 'no label', 'distance': 'no label', 'temps': 'no label', 'difficulte': 'no label', 'categorie': 'no label', 'depart': 'no label', 'denivele': 'no label', 'gestionnai': 'no label', 'lien': 'no label', });
lyr_bt_prive_8.set('fieldLabels', {'gc_key': 'no label', 'angle': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', });
lyr_bt_pub_9.set('fieldLabels', {'gc_key': 'no label', 'angle': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', 'affectat': 'no label', });
lyr_bt_rel_10.set('fieldLabels', {'gc_key': 'no label', 'angle': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', });
lyr_bt_leger_11.set('fieldLabels', {'gc_key': 'no label', 'angle': 'no label', 'nom': 'no label', 'planche': 'no label', 'lot_meta': 'no label', });
lyr_SaintLoAgglo_LimiteAdministrative_12.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'code_siren': 'no label', 'nature': 'no label', 'nom': 'no label', 'date_creat': 'no label', 'date_maj': 'no label', 'date_app': 'no label', 'date_conf': 'no label', 'id_aut_adm': 'no label', 'Aire(ha)': 'no label', 'aire(ha)2': 'no label', });
lyr_SaintLoAgglo_LimiteAdministrative_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});