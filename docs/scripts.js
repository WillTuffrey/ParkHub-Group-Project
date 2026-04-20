function Function1(x) {    // Test function
    if (x == 1) {
        document.getElementById("demo").innerHTML = "Paragraph changed to paragraph one.";
    }
    else if (x == 2) {
        document.getElementById("demo").innerHTML = "Paragraph changed to paragraph two.";
    }
}
function toggleDropdown() {
    // Toggle the dropdown menu visibility and the button image    
    var dropdownMenu = document.getElementById("button");
    dropdownMenu.toggleAttribute("active");    
}

function GetMoreInformation() {
    alert("Get more information button clicked!");
}
function OpenInPlan() {
    alert("Open in plan button clicked!");
}

function outputTable(json) {
    let element = document.getElementById("results");
    element.innerHTML = "";
    let features = json.features;
    for (i=0; i<features.length; i++) {
        tn = document.createElement('tn');
        ta = document.createElement('ta');
        ton = document.createElement('ton');
        ts = document.createElement('ts');
        tot = document.createElement('tot');
        let a = features[i].attributes;
        let g = features[i].geometry;        

        tn.innerHTML = a.NAME;
        tn.appendChild(tn);
        tn = document.createElement('tn');

        ta.innerHTML = a.AREA_NAME;
        ta.appendChild(ta);
        ta = document.createElement('ta');

        ton.innerHTML = a.OPPERATOR_NAME;
        ton.appendChild(ton);
        ton = document.createElement('ton');

        ts.innerHTML = a.SPACES;
        ts.appendChild(ts);
        ts = document.createElement('ts');
        
        ts.innerHTML = a.OPERATING_TIMES;
        ts.appendChild(ts);
        ts = document.createElement('ts');
    }
}
 
function query() {
    let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,NUMBER_LEVELS,AREA_NAME,OPERATOR_NAME,SPACES,OPERATING_TIMES,TYPE_DESCRIPTION,CCTV,NORTHINGS,EASTINGS&outSR=4326&f=json"
    fetch(url)
    .then(res=>res.json())
    .then(outputTable);
}
 
 
function filter(type) {
    let urlEncoded = encodeURIComponent(type);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,NUMBER_LEVELS,AREA_NAME,OPERATOR_NAME,SPACES,OPERATING_TIMES,TYPE_DESCRIPTION,CCTV,NORTHINGS,EASTINGS&outSR=4326&f=json`;
    fetch(url)
    .then (response => response.json())
    .then(outputTable);
}
      
function like(type) {
    let urlEncoded = encodeURIComponent(type);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,NUMBER_LEVELS,AREA_NAME,OPERATOR_NAME,SPACES,OPERATING_TIMES,TYPE_DESCRIPTION,CCTV,NORTHINGS,EASTINGS&outSR=4326&f=json`;
    fetch(url)
    .then (response => response.json())
    .then(outputTable);
}



function testMap(mapReference) { // potential js script for all maps
    var userLocationAllowed = false;
    var userLocationMarker = L.icon({               // Fix to make the point of the marker hit the exact location of where its pointed (user and car parks)
        iconUrl: 'images/marker_orange.png',
        shadowUrl: 'images/marker_shadow.png',
        iconSize: [26,46],
        iconAnchor: [13,46],
        popupAnchor: [0,-48],                            
        shadowSize: [40, 60],
        shadowAnchor: [19.5, 56]
    });
    var carParkLocationMarker = L.icon({
        iconUrl: 'images/marker_blue.png',
        shadowUrl: 'images/marker_shadow.png',
        iconSize: [26,46],
        iconAnchor: [13,46],
        popupAnchor: [0,-48],                            
        shadowSize: [40, 60],
        shadowAnchor: [19.5, 56]
    });
    function getLocation(page) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( // if location is allowed, get the lat and lon of the user
                loc => window.location.href=`${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`,
                () => window.location.href=`${page}?lat=51.4647924&lon=-2.598659`)
            userLocationAllowed = true;
        }
        else { // positions centre if location is disallowed or not supported
            window.alert("Geolocation is not supported by this browser.");
            window.location.href=`${page}?lat=51.4647924&lon=-2.598659`;
        }
    }                        
    function outputMarkers(json) {
        let f = json.features;
        for(let i=0;i<f.length;i++) {
            let a = f[i].attributes;
            let lon = f[i].geometry.x;
            let lat = f[i].geometry.y;
            let marker = L.marker([lat,lon], {icon: carParkLocationMarker}).addTo(map);
            marker.bindPopup(`<b>${a.NAME}</b><br><b>${a.SPACES}</b> available spaces,<br><b>${a.TYPE_DESCRIPTION}</b><br><button class='markerButton' onclick="GetMoreInformation()">More information</button>`);
        }
    }
    function mapQuery() {
        let url = "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/5/query?where=1%3D1&outFields=NAME,AREA_NAME,OPERATOR,OPERATOR_NAME,SPACES,OPERATING_TIMES,TYPE_DESCRIPTION,CCTV,EASTINGS,NORTHINGS&outSR=4326&f=json"
        fetch(url).then(r=>r.json()).then(outputMarkers);
    }
    var urlParams = new URLSearchParams(location.search);
    var lat = urlParams.get('lat') || 51.464792;
    var lon = urlParams.get('lon') || -2.598659;
    var map = L.map(mapReference).setView([lat,lon], 17);

    //if (userLocationAllowed) { // remake to only show a marker when the location is being shared, otherwise it just shows the default location with no marker                            
    //    L.marker([lat, lon], {icon: navigationPointer}).addTo(map).bindPopup("<b>Your location</b>").openPopup();
    //}
    L.marker([lat, lon], {icon: userLocationMarker, zIndexOffset: 1000}).addTo(map).bindPopup("<b>Your location</b>").openPopup();

    // attribution legally required by the OpenStreetMap license
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    mapQuery();
}