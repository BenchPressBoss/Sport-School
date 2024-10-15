interface IScheduleCardData {
	id: number
	time: string
	category: string
	during: string
	name: string
}

export const ScheduleData: IScheduleCardData[] = [
	{
		id: 1,
		time: '10:00',
		category: 'CROSSFIT',
		during: '30min',
		name: 'Ethan Bell'
	},
	{
		id: 1,
		time: '11:00',
		category: 'PILATES',
		during: '90min',
		name: 'Jenny McKinney'
	},
	{
		id: 1,
		time: '12:30',
		category: 'BOXING',
		during: '120min',
		name: 'Michael Lee'
	},
	{
		id: 1,
		time: '14:30',
		category: 'YOGA',
		during: '90min',
		name: 'Annie Smith'
	}
]
