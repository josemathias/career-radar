var radar_arcs = [
    {'r':100,'name':'Ri'},
    {'r':200,'name':'Ha'},
    {'r':300,'name':'Shu'},
    {'r':400,'name':'Ku'}
];

var radar_quadrants = [];
var radar_data = [];

function len(object) {
    var i = 0;
    for(var k in object) {
        if(object.hasOwnProperty(k)) {
            i++;
        }
    }
    return i;
}

var quad = 1;
for(var quadrant in data) {
    var i = 1;
    var start = radar_data.length;
    for(var item in data[quadrant]) {
        radar_data.push({name: item, movement: 'c', pc: {
            r: (Math.abs(4 - data[quadrant][item]) * 100) + ((40 / len(data[quadrant]) * i)) + 40,
            t: (quad == 1 ? 90 : quad == 2 ? 20 : quad == 3 ? 200 : 280) + ((60 / len(data[quadrant]) * i))
        }});
        i++;
    }
    var end = radar_data.length;

    radar_quadrants.push({name: quadrant, start: start, end: end});
    quad++;
}

