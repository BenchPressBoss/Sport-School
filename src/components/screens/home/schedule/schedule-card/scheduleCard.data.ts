interface IScheduleCardData {
	id: number
	time: string
	category: string
	during: string
	name: string
}

interface IScheduleByDay {
	[day: string]: IScheduleCardData[]
}
export const ScheduleData: IScheduleByDay = {
	Monday: [
		{
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		},
		{
			id: 2,
			time: '11:00',
			category: 'PILATES',
			during: '90min',
			name: 'Jenny McKinney'
		}
	],
	Tuesday: [
		{
			id: 3,
			time: '12:30',
			category: 'BOXING',
			during: '120min',
			name: 'Michael Lee'
		}
	],
	Wednesday: [
		{
			id: 4,
			time: '14:30',
			category: 'YOGA',
			during: '90min',
			name: 'Annie Smith'
		},
		{
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		}
	]
}
