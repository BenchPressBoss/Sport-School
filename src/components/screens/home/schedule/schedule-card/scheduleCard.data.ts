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
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		},
		{
			id: 4,
			time: '14:30',
			category: 'YOGA',
			during: '90min',
			name: 'Annie Smith'
		}
	],
	Thursday: [
		{
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		},
		{
			id: 6,
			time: '11:00',
			category: 'PILATES',
			during: '90min',
			name: 'Jenny McKinney'
		},
		{
			id: 5,
			time: '15:45',
			category: 'SWIMMING',
			during: '60min',
			name: 'Sarah Johnson'
		}
	],
	Friday: [
		{
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		}
	],
	Saturday: [
		{
			id: 1,
			time: '10:00',
			category: 'CROSSFIT',
			during: '30min',
			name: 'Ethan Bell'
		},
		{
			id: 6,
			time: '11:00',
			category: 'PILATES',
			during: '90min',
			name: 'Jenny McKinney'
		},
		{
			id: 4,
			time: '14:30',
			category: 'YOGA',
			during: '90min',
			name: 'Annie Smith'
		}
	]
}
