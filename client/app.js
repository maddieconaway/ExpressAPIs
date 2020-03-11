

// $.get('/api/chirps/', (data) => {
//     console.log(data);
// });
var table = document.getElementById("tblChirps");
fetch("/api/chirps/")
    .then(response => {
        return response.json();
    })
    .then(chirps => {
        for (var key in chirps) {
            if (key != 'nextid') {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                for (var chirp in chirps[key]) {
                    if (chirp == 'user') {
                        console.log('adding user');
                        cell1.innerHTML = chirps[key][chirp];
                    } else {
                        cell2.innerHTML = chirps[key][chirp];
                    }
                }
                cell3.innerHTML=`<button id='btnEdit${key}' class='btnEdit'>!</button>`;
                cell4.innerHTML=`<button id='btnDel${key}' class='btnDelete'>X</button>`;
            }
        }
    });
