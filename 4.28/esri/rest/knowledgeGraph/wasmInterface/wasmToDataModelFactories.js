// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry/SpatialReference ../DataModel ../EntityType ../FieldIndex ../GraphObjectType ../GraphProperty ../RelationshipType ../SearchIndex ./WasmDataModelWrapperInterfaces".split(" "),function(m,D,E,F,G,H,I,J,K,c){function w(a){a.deleteLater();return new F(u(a))}function x(a){a.deleteLater();var n=a.name,g=a.unique,e=a.ascending,h=a.description;a=a.fields;const d=[];for(let k=0;k<a.size();k++)d.push(a.get(k));return new G({name:n,unique:g,ascending:e,description:h,fieldNames:d})}
function u(a){var n=a.name,g=a.alias,e=c.NamedObjectTypes[a.role.value]?c.NamedObjectTypes[a.role.value]:null,h=a.strict,d=a.properties;const k=[];for(var f=0;f<d.size();f++)k.push(y(d.get(f)));a=a.field_indexes;d=[];for(f=0;f<a.size();f++)d.push(x(a.get(f)));return{name:n,alias:g,role:e,strict:h,properties:k,fieldIndexes:d}}function y(a){a.deleteLater();return new I({alias:a.alias,name:a.name,fieldType:c.EsriFieldTypes[a.field_type.value]?c.EsriFieldTypes[a.field_type.value]:null,geometryType:c.EsriGeometryTypes[a.geometry_type.value]?
c.EsriGeometryTypes[a.geometry_type.value]:null,hasM:a.has_m,hasZ:a.has_z,nullable:a.nullable,editable:a.editable,required:a.required,defaultVisibility:a.default_visibility,systemMaintained:a.system_maintained,role:c.EsriGraphPropertyRole[a.role.value],defaultValue:a.default_value})}function z(a){a.deleteLater();const n=u(a),g=[];for(let e=0;e<a.end_points.size();e++){const h=a.end_points.get(e);g.push({originEntityType:h.origin_entity_type,destinationEntityType:h.dest_entity_type})}return new J(Object.assign({endPoints:g},
n))}m.wasmToDataModel=function(a){a.deleteLater();var n=a.timestamp,g=new D(a.spatial_reference),e=a.strict,h=a.objectid_property,d=a.globalid_property,k=a.arcgis_managed,f={identifierMappingInfo:{identifierInfoType:c.EsriIdentifierInfoType[a.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:a.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:a.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},
identifierGenerationInfo:{uuidMethodHint:c.EsriUuidMethodHintTypes[a.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},r=a.search_indexes;const A=[];for(var l=0;l<r.size();l++){var b=new K;const p=r.get(0);b.name=p.name;b.supportedCategory=c.EsriNamedTypeCategory[p.supported_category.value];var t=p.analyzers.size();for(var q=0;q<t;q++)b.analyzers.push({name:p.analyzers.get(q).name});for(t=0;t<p.search_properties.keys().size();t++){q=p.search_properties.keys().get(t);const B=
p.search_properties.get(q),C=[];for(let v=0;v<B.property_names.size();v++)C.push(B.property_names.get(v));b.searchProperties.set(q,{propertyNames:C})}A.push(b)}l=a.entity_types;r=[];for(b=0;b<l.size();b++)r.push(w(l.get(b)));a=a.relationship_types;l=[];for(b=0;b<a.size();b++)l.push(z(a.get(b)));return new E({timestamp:n,spatialReference:g,strict:e,objectIdField:h,globalIdField:d,arcgisManaged:k,identifierInfo:f,searchIndexes:A,entityTypes:r,relationshipTypes:l})};m.wasmToEntityType=w;m.wasmToFieldIndex=
x;m.wasmToGraphObjectType=function(a){a.deleteLater();return new H(u(a))};m.wasmToGraphProperty=y;m.wasmToRelationshipType=z;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});