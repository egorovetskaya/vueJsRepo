/*
Vue.component ("app-name",{
    data: function() {
        return {
            table: [
                {name: "Harry", points: 10, year: 2008},
                {name: "Ron", points: 20, year: 2009},
                {name: "Newill", points: 30, year: 2010},
                {name: "Din", points: 40, year: 2011},
                {name: "Sirius", points: 50, year: 1990},
                {name: "Draco", points: 15, year: 2008},
                {name: "Winsent", points: 25, year: 2009},
                {name: "Gregory", points: 35, year: 2010},
                {name: "Ewan", points: 45, year: 2011},
                {name: "Orion", points: 55, year: 1990}
            ]
        }
    },
    template: '<div><div class="name" v-for= "name in table"><p>{{ name.name }}</p></div></div>'
}),
*/


    new Vue({
	el: "#app",
	data: {
		show: true,
	},
});

$(document).ready(function () {
    var json = [
    	{"User_Name":"John Doe","score":"10","team":"1900"},
		{"User_Name":"Jane Smith","score":"15","team":"1950"},
		{"User_Name":"Chuck Berry","score":"12","team":"2000"},
        {"User_Name":"Jane Doe","score":"35","team":"1955"},
        {"User_Name":"Karoline Forbes","score":"76","team":"1990"},
        {"User_Name":"Helena Gilbert","score":"59","team":"1970"},
        {"User_Name":"Din Winchester","score":"48","team":"1998"},
        {"User_Name":"Stephen Salvatore","score":"18","team":"1989"},
        {"User_Name":"Klaus Mikaelson","score":"52","team":"1978"},
        {"User_Name":"Matt Donovan","score":"95","team":"1999"}
		];

    ko.applyBindings({
        teams: json
    });
});