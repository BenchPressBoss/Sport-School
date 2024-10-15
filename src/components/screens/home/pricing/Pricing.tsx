import Btn from '@components/ui/btn/Btn'

import styles from './Pricing.module.scss'
import { price } from './pricing.data'

function Pricing() {
	return (
		<div className={styles.wrapper}>
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
	)
}

export default Pricing
