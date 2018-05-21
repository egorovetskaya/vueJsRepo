Vue.component('app-grid', {
	template: "#grid",
	data() {
		return {
			header: [
				{ 
					name:'User Name',
					alias: 'User_Name'
				},
				{ 
					name: 'Team',
					alias: 'team',
				},
				{
					name: 'Score',
					alias: 'score'
				},
			],
			body: [
				{
					"User_Name":"John Doe",
					"score":"10",
					"team":"1900"
				},
				{
					"User_Name":"Jane Smith",
					"score":"15",
					"team":"1950"
				},
				{
					"User_Name":"Chuck Berry",
					"score":"12",
					"team":"2000"
				},
				{
					"User_Name":"Jane Doe",
					"score":"35",
					"team":"1955"
				},
				{
					"User_Name":"Karoline Forbes",
					"score":"76",
					"team":"1990"
				},
				{
					"User_Name":"Helena Gilbert",
					"score":"59",
					"team":"1970"
				},
				{
					"User_Name":"Din Winchester",
					"score":"48",
					"team":"1998"
				},
				{
					"User_Name":"Stephen Salvatore",
					"score":"18",
					"team":"1989"
				},
				{
					"User_Name":"Klaus Mikaelson",
					"score":"52",
					"team":"1978"
				},
				{
					"User_Name":"Matt Donovan",
					"score":"95",
					"team":"1999"
				}
			]
		}
	}
});