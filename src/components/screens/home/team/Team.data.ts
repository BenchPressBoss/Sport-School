interface ITeamData {
	id: number
	img: string
	name: string
	category: string
}

export const TeamDataItems: ITeamData[] = [
	{
		id: 1,
		img: 'img/teamEthan.jpg',
		name: 'Ethan Bell',
		category: 'Crossfit, coach'
	},
	{
		id: 2,
		img: 'img/teamAnnie.jpg',
		name: 'Annie Smith',
		category: 'Yoga, coach'
	},
	{
		id: 3,
		img: 'img/teamJenny.jpg',
		name: 'Jenny McKinney',
		category: 'Pilates, coach'
	},
	{
		id: 4,
		img: 'img/teamLiam.jpg',
		name: 'Liam Wilson',
		category: 'Fitness trainer'
	},
	{
		id: 5,
		img: 'img/teamMichael.jpg',
		name: 'Michael Lee',
		category: 'Boxing, coach'
	}
]
