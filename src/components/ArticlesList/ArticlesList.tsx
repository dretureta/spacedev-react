import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './ArticlesList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeh } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import MoodItem from './MoodItem';

interface Article {
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
	mood: string;
}

const ArticlesList: React.FC = props => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [drop, setDrop] = useState<number | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:8080/articles');
			setArticles(result.data);
		};
		fetchData();
	}, []);

	const changeMood = (index: number, mood: string): void => {
		const newArticles: Article[] = [...articles];
		newArticles[index].mood = mood;
		setArticles(newArticles);
	};

	const removeArticle = (index: number): void => {
		const newArticles: Article[] = [...articles];
		newArticles.splice(index, 1);
		setArticles(newArticles);
	};

	const handleDropdownClick = (index: number): void => {
		setOpen(!open);
		setDrop(index);
	};

	console.log(articles);
	return (
		<Fragment>
			<div className='container'>
				<section className='main'>
					{articles.map((article: Article, index: number) => (
						<Fragment key={index}>
							<article className='article'>
								<div className='img-article'>
									<img
										src={article.urlToImage}
										alt=''
										width='180'
										height='100'
									/>
								</div>
								<div className='body-article'>
									<h2 className='titulo'>{article.title}</h2>
									<p>{article.description}</p>

									<div className='footer-article'>
										<span onClick={() => removeArticle(index)}>
											<FontAwesomeIcon icon={faTrashAlt} size='2x' />
										</span>

										<li
											className='dropdown-container'
											onClick={() => handleDropdownClick(index)}
										>
											<span className='dropdown-buttom'>
												{article.mood === 'Positive' && (
													<FontAwesomeIcon
														icon={faSmile}
														color='green'
														size='2x'
													/>
												)}
												{article.mood === 'Negative' && (
													<FontAwesomeIcon
														icon={faFrown}
														color='red'
														size='2x'
													/>
												)}{' '}
												{article.mood === 'Neutral' && (
													<FontAwesomeIcon
														icon={faMeh}
														color='gray'
														size='2x'
													/>
												)}
											</span>
											{open && drop === index && (
												<div className='dropdown'>
													<ul>
														<MoodItem
															click={() => changeMood(index, 'Positive')}
															icon={faSmile}
															color='green'
															mood='Positive'
														/>
														<MoodItem
															click={() => changeMood(index, 'Negative')}
															icon={faFrown}
															color='red'
															mood='Negative'
														/>
														<MoodItem
															click={() => changeMood(index, 'Neutral')}
															icon={faMeh}
															color='gray'
															mood='Neutral'
														/>
													</ul>
												</div>
											)}
										</li>
									</div>
								</div>
							</article>
						</Fragment>
					))}
				</section>
			</div>
		</Fragment>
	);
};

export default ArticlesList;
