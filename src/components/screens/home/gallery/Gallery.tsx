import styles from './Gallery.module.scss'

function Gallery() {
	return (
		<div>
			<img
				src='/img/gallery1.jpg'
				alt='Exercise 1'
				className={`${styles.galleryItem} ${styles.item1}`}
			/>
			<img
				src='/img/gallery2.jpg'
				alt='Exercise 2'
				className={`${styles.galleryItem} ${styles.item2}`}
			/>
			<img
				src='/img/gallery3.jpg'
				alt='Exercise 3'
				className={`${styles.galleryItem} ${styles.item3}`}
			/>
			<img
				src='/img/gallery4.jpg'
				alt='Exercise 4'
				className={`${styles.galleryItem} ${styles.item4}`}
			/>
			<img
				src='/img/gallery5.jpg'
				alt='Exercise 5'
				className={`${styles.galleryItem} ${styles.item5}`}
			/>
		</div>
	)
}

export default Gallery
