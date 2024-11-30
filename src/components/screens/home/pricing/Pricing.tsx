import Btn from '@components/ui/btn/Btn'

import styles from './Pricing.module.scss'
import { price } from './pricing.data'

function Pricing({ id }: { id: string }) {
	return (
		<div className={styles.wrapper} id={id}>
			<h1>Select your pricing plan</h1>
			<p>
				We offer three varied pricing plans to satisfy the needs of every
				customer. From group training to individual workouts, there’s something
				for everyone.
			</p>
			<div className={styles.container}>
				{price.map(item => (
					<div key={item.id} className={styles.pricePlan}>
						<div className={styles.price}>
							<h3>{item.name}</h3>
							<h1>${item.price.toFixed(2)}</h1>
						</div>
						<div className={styles.categories}>
							{item.categories.map(i => (
								<p key={i.category} className={styles.category}>
									{i.category}
								</p>
							))}
						</div>
						<Btn text='Choose' />
					</div>
				))}
			</div>
		</div>
	)
}

export default Pricing
