interface IPrice {
	id: number
	name: string
	price: number
	categories: {
		category: string
	}[]
}

export const price: IPrice[] = [
	{
		id: 1,
		name: 'Basic',
		price: 40,
		categories: [
			{ category: 'Gym' },
			{ category: 'Crossfit' },
			{ category: 'Yoga' }
		]
	},
	{
		id: 2,
		name: 'Standard',
		price: 60,
		categories: [
			{ category: 'Gym' },
			{ category: 'Crossfit' },
			{ category: 'Yoga' },
			{ category: 'Pilates' },
			{ category: 'Boxing' }
		]
	},
	{
		id: 3,
		name: 'Premium',
		price: 99,
		categories: [
			{ category: 'Gym' },
			{ category: 'Crossfit' },
			{ category: 'Yoga' },
			{ category: 'Pilates' },
			{ category: 'Boxing' },
			{ category: 'Personal Coach' }
		]
	}
]
